(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177], {
    1423: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 6713)), Promise.resolve().then(r.t.bind(r, 9324, 23))
    },
    6713: (e, t, r) => {
      "use strict";
      r.d(t, {
        default: () => l,
        n: () => n
      });
      var o = r(5155),
        a = r(2115),
        i = r(8919);
      let u = (0, a.createContext)(void 0),
        n = () => {
          let e = (0, a.useContext)(u);
          if (!e) throw Error("useAudio must be used within an AudioProvider");
          return e
        },
        l = e => {
          let {
            children: t
          } = e, [r] = (0, a.useState)(() => {
            {
              let e = new Audio;
              return e.preload = "metadata", e.crossOrigin = "anonymous", e.volume = .8, e
            }
          }), [n, l] = (0, a.useState)(i.dY[0]), [d, s] = (0, a.useState)(!1), [c, m] = (0, a.useState)(0), [g, p] = (0, a.useState)(.8), [v, f] = (0, a.useState)(0), [y, h] = (0, a.useState)(0), [S, k] = (0, a.useState)(!0), [E, b] = (0, a.useState)(null), [A, C] = (0, a.useState)(!1), I = (0, a.useRef)(0), L = (0, a.useRef)(null), Y = (0, a.useRef)(!1);
          (0, a.useEffect)(() => {
            r && (r.volume = g)
          }, [r, g]);
          let j = e => {
              let [t, r] = e.split(":").map(Number);
              return 60 * t + r
            },
            T = (0, a.useCallback)(() => {
              L.current && (clearInterval(L.current), L.current = null)
            }, []),
            w = (0, a.useCallback)(() => {
              let e = (i.dY.findIndex(e => e.id === n.id) + 1) % i.dY.length,
                t = i.dY[e];
              t.id !== n.id && (r && S && r.pause(), T(), l(t), m(0), f(0), I.current = 0, b(null))
            }, [n, i.dY, r, S, T]),
            F = (0, a.useCallback)(() => {
              let e = (i.dY.findIndex(e => e.id === n.id) - 1 + i.dY.length) % i.dY.length,
                t = i.dY[e];
              t.id !== n.id && (r && S && r.pause(), T(), l(t), m(0), f(0), I.current = 0, b(null))
            }, [n, i.dY, r, S, T]),
            P = (0, a.useCallback)(() => {
              T();
              let e = j(n.duration);
              console.log("Starting simulation from:", I.current, "seconds"), L.current = setInterval(() => {
                if (!Y.current) return void T();
                f(t => {
                  let r = t + 1;
                  return (m(r / e * 100), r >= e) ? (T(), s(!1), Y.current = !1, f(0), m(0), I.current = 0, setTimeout(() => {
                    w()
                  }, 500), 0) : (I.current = r, r)
                })
              }, 1e3)
            }, [n.duration, w, T]);
          (0, a.useEffect)(() => {
            if (r)
              if (console.log("Loading new song:", n.title), b(null), f(0), m(0), I.current = 0, T(), n.audioSrc) try {
                r.src = n.audioSrc, r.load(), k(!0);
                let e = () => {
                    console.log("Audio metadata loaded, duration:", r.duration), h(r.duration)
                  },
                  t = () => {
                    console.log("Audio can play"), Y.current && A && r.play().catch(e => {
                      console.log("Autoplay failed:", e), k(!1), h(j(n.duration)), Y.current && P()
                    })
                  },
                  o = () => {
                    if (S && void 0 !== r.currentTime) {
                      f(r.currentTime);
                      let e = r.currentTime / r.duration * 100;
                      m(e), I.current = r.currentTime
                    }
                  },
                  a = () => {
                    console.log("Audio ended"), s(!1), Y.current = !1, f(0), m(0), I.current = 0, setTimeout(() => {
                      w()
                    }, 500)
                  },
                  i = () => {
                    console.log("Audio error, falling back to simulation"), k(!1), h(j(n.duration)), Y.current && P()
                  };
                return r.addEventListener("loadedmetadata", e), r.addEventListener("canplay", t), r.addEventListener("timeupdate", o), r.addEventListener("ended", a), r.addEventListener("error", i), () => {
                  r.removeEventListener("loadedmetadata", e), r.removeEventListener("canplay", t), r.removeEventListener("timeupdate", o), r.removeEventListener("ended", a), r.removeEventListener("error", i)
                }
              } catch (e) {
                console.error("Error loading audio:", e), k(!1), h(j(n.duration))
              } else k(!1), h(j(n.duration))
          }, [n, r, A, S, P, T, w]);
          let M = (0, a.useCallback)(e => {
              console.log("Selecting song:", e.title), e.id !== n.id && (r && S && r.pause(), T(), l(e), m(0), f(0), I.current = 0, b(null), Y.current && A && setTimeout(() => {
                S && r ? r.play().catch(() => {
                  k(!1), P()
                }) : P()
              }, 100))
            }, [r, S, n.id, A, T, P]),
            N = (0, a.useCallback)(() => {
              if (console.log("Play function called"), C(!0), b(null), Y.current) return void console.log("Already playing");
              s(!0), Y.current = !0, r && S && n.audioSrc ? (I.current > 0 && (r.currentTime = I.current), r.play().then(() => {
                console.log("Audio playing successfully")
              }).catch(e => {
                console.log("Audio play failed:", e), k(!1), h(j(n.duration)), "NotAllowedError" === e.name ? b("Klik tombol play untuk memulai musik") : b("File audio tidak dapat diputar, menggunakan mode simulasi"), P()
              })) : (S || h(j(n.duration)), P())
            }, [r, S, n.audioSrc, n.duration, P]),
            _ = (0, a.useCallback)(() => {
              if (console.log("Pause function called"), !Y.current) return void console.log("Already paused");
              s(!1), Y.current = !1, r && S ? (r.pause(), I.current = r.currentTime, console.log("Audio paused at:", I.current)) : console.log("Simulation paused at:", I.current), T()
            }, [r, S, T]),
            x = (0, a.useCallback)(e => {
              p(e), r && (r.volume = e)
            }, [r]),
            B = (0, a.useCallback)(e => {
              let t = e / 100 * (S && (null == r ? void 0 : r.duration) ? r.duration : j(n.duration));
              m(e), f(t), I.current = t, r && S && (r.currentTime = t)
            }, [r, S, n.duration]);
          return (0, a.useEffect)(() => () => {
            T(), r && r.pause()
          }, [r, T]), (0, o.jsx)(u.Provider, {
            value: {
              currentSong: n,
              isPlaying: d,
              progress: c,
              volume: g,
              currentTime: v,
              duration: y,
              play: N,
              pause: _,
              next: w,
              prev: F,
              setVolume: x,
              selectSong: M,
              setProgress: B,
              audioError: E
            },
            children: t
          })
        }
    },
    8919: (e, t, r) => {
      "use strict";
      r.d(t, {
        KQ: () => a,
        Ld: () => i,
        dY: () => o
      });
      let o = [{
          id: 1,
          title: "I Lay My Love On You", artist: "Westlife",
          duration: "03:45",
          audioSrc: "/music/lagu1.mp3",
          coverImage: "/images/music/fotocover1.jpg"
        }, {
          id: 2,
          title: "Perfect", artist: "Ed Sheeran",
          duration: "04:20",
          audioSrc: "/music/lagu2.mp3",
          coverImage: "/images/music/fotocover2.jpg"
        }, {
          id: 3,
          title: "You", artist: "LANY",
          duration: "03:10",
          audioSrc: "/music/lagu3.mp3",
          coverImage: "/images/music/fotocover3.jpg"
        }, {
          id: 4,
          title: "Kau Rumahku", artist: "Raissa Anggiani",
          duration: "05:05",
          audioSrc: "/music/lagu4.mp3",
          coverImage: "/images/music/fotocover4.jpg"
        }, {
          id: 5,
          title: "Ah", artist: "Nadin Amizah",
          duration: "02:55",
          audioSrc: "/music/lagu5.mp3",
          coverImage: "/images/music/fotocover5.jpg"
        }],
        a = [{
          id: 1,
          src: "/images/foto1.jpg",
          alt: "Foto 1",
          type: "photo"
        }, {
          id: 2,
          src: "/images/foto2.jpg",
          alt: "Foto 2",
          type: "photo"
        }, {
          id: 3,
          src: "/images/foto3.jpg",
          alt: "Foto 3",
          type: "photo"
        }, {
          id: 4,
          src: "/images/foto4.jpg",
          alt: "Foto 4",
          type: "photo"
        }, {
          id: 5,
          src: "/images/foto5.jpg",
          alt: "Foto 5",
          type: "photo"
        }],
        i = [{
          id: 101,
          src: "/images/video1.mp4",
          alt: "Video 1",
          type: "video"
        }, {
          id: 102,
          src: "/images/video2.mp4",
          alt: "Video 2",
          type: "video"
        }];
      [...a, ...i]
    },
    9324: () => {}
  },
  e => {
    var t = t => e(e.s = t);
    e.O(0, [533, 441, 684, 358], () => t(1423)), _N_E = e.O()
  }
]);

