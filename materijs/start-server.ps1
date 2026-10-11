$port = 8080
$path = "$PSScriptRoot\materi osn"

$http = [System.Net.HttpListener]::new()
$http.Prefixes.Add("http://localhost:$port/")
$http.Start()

Write-Host "Server berjalan di http://localhost:$port/"
Write-Host "Browser akan segera terbuka otomatis..."
Write-Host "Biarkan jendela ini tetap terbuka. Tekan Ctrl+C untuk mematikan."

Start-Process "http://localhost:$port/"

while ($http.IsListening) {
    $context = $http.GetContext()
    $response = $context.Response
    
    $reqPath = $context.Request.Url.LocalPath
    $rawUrl = $context.Request.RawUrl
    
    if ($reqPath -eq "/") { $reqPath = "/index.html" }
    
    if ($reqPath -eq "/_next/image") {
        if ($context.Request.Url.Query -match 'url=([^&]+)') {
            $reqPath = [uri]::UnescapeDataString($matches[1])
        }
    }
    
    $filePath = Join-Path $path $reqPath.Replace('/', '\')
    
    $status = 200
    if (Test-Path $filePath -PathType Leaf) {
        $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
        $contentType = switch ($ext) {
            ".html" { "text/html" }
            ".css"  { "text/css" }
            ".js"   { "application/javascript" }
            ".png"  { "image/png" }
            ".jpg"  { "image/jpeg" }
            ".jpeg" { "image/jpeg" }
            ".gif"  { "image/gif" }
            ".mp3"  { "audio/mpeg" }
            ".mp4"  { "video/mp4" }
            ".ttf"  { "font/ttf" }
            ".ico"  { "image/x-icon" }
            default { "application/octet-stream" }
        }
        $response.ContentType = $contentType
        
        $content = [System.IO.File]::ReadAllBytes($filePath)
        $response.ContentLength64 = $content.Length
        $response.OutputStream.Write($content, 0, $content.Length)
    } else {
        $status = 404
        $response.StatusCode = 404
    }
    
    $logLine = "$(Get-Date -Format 'HH:mm:ss') - $status - $rawUrl -> $filePath"
    Add-Content -Path "$PSScriptRoot\server.log" -Value $logLine
    Write-Host $logLine
    
    $response.Close()
}
