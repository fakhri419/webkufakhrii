(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974], {
    1508: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 5475))
    },
    5475: (e, t, a) => {
      "use strict";
      a.d(t, {
        default: () => p
      });
      var s = a(5155),
        l = a(9137),
        r = a.n(l),
        n = a(2115),
        i = a(9911),
        o = a(2515),
        c = a(5028),
        d = a(6713);
      let u = (0, c.default)(() => a.e(293).then(a.bind(a, 1293)), {
          loadableGenerated: {
            webpack: () => [1293]
          }
        }),
        m = (0, c.default)(() => Promise.all([a.e(766), a.e(509)]).then(a.bind(a, 3509)), {
          loadableGenerated: {
            webpack: () => [3509]
          }
        }),
        g = (0, c.default)(() => a.e(190).then(a.bind(a, 3190)), {
          loadableGenerated: {
            webpack: () => [3190]
          }
        }),
        x = (0, c.default)(() => a.e(136).then(a.bind(a, 9136)), {
          loadableGenerated: {
            webpack: () => [9136]
          }
        }),
        f = (0, c.default)(() => a.e(29).then(a.bind(a, 9029)), {
          loadableGenerated: {
            webpack: () => [9029]
          }
        }),
        h = (0, c.default)(() => a.e(883).then(a.bind(a, 9883)), {
          loadableGenerated: {
            webpack: () => [9883]
          }
        }),
        p = () => {
          let [e, t] = (0, n.useState)("messages"), [a, l] = (0, n.useState)(!0), [c, p] = (0, n.useState)(!1), {
            isPlaying: b,
            play: v,
            pause: j,
            next: w,
            prev: y,
            volume: k,
            setVolume: N
          } = (0, d.n)(), [S, E] = (0, n.useState)(!1), z = (0, n.useRef)(null), [C, M] = (0, n.useState)(!1), [T, I] = (0, n.useState)("bg-red-500"), [P, L] = (0, n.useState)(!1), [A, Y] = (0, n.useState)(0), [F, G] = (0, n.useState)(0), B = (0, n.useMemo)(() => [{
            class: "bg-red-500",
            glow: "0 0 8px 2px rgba(239, 68, 68, 0.8)"
          }, {
            class: "bg-green-500",
            glow: "0 0 8px 2px rgba(34, 197, 94, 0.8)"
          }, {
            class: "bg-blue-500",
            glow: "0 0 8px 2px rgba(59, 130, 246, 0.8)"
          }, {
            class: "bg-yellow-500",
            glow: "0 0 8px 2px rgba(234, 179, 8, 0.8)"
          }, {
            class: "bg-purple-500",
            glow: "0 0 8px 2px rgba(168, 85, 247, 0.8)"
          }, {
            class: "bg-pink-500",
            glow: "0 0 8px 2px rgba(236, 72, 153, 0.8)"
          }], []), R = (0, n.useMemo)(() => [
            [{
              id: "messages",
              label: "Pesan",
              icon: (0, s.jsx)(o.tPU, {
                size: 28
              })
            }, {
              id: "gallery",
              label: "Galeri",
              icon: (0, s.jsx)(o.q0d, {
                size: 28
              })
            }, {
              id: "music",
              label: "Musik",
              icon: (0, s.jsx)(o.vC2, {
                size: 28
              })
            }],
            [{
              id: "notes",
              label: "Notes",
              icon: (0, s.jsx)(o.NpB, {
                size: 28
              })
            }, {
              id: "clock",
              label: "Jam",
              icon: (0, s.jsx)(o.VP9, {
                size: 28
              })
            }, {
              id: "game",
              label: "Game",
              icon: (0, s.jsx)(o.x_s, {
                size: 28
              })
            }]
          ], []), _ = (0, n.useMemo)(() => R.flat(), [R]), [K, O] = (0, n.useState)(0), [X, V] = (0, n.useState)(null), [W, J] = (0, n.useState)(null), D = (0, n.useRef)(null), [H, U] = (0, n.useState)(!1), [q, Q] = (0, n.useState)(null);
          (0, n.useEffect)(() => {
            let e = setInterval(() => {
              l(e => !e)
            }, 5e3);
            return () => clearInterval(e)
          }, []), (0, n.useEffect)(() => {
            let e = setInterval(() => {
                let e = Math.floor(Math.random() * B.length);
                Y(e), I(B[e].class)
              }, 2e3),
              t = setInterval(() => {
                L(e => !e)
              }, 800),
              a = setInterval(() => {
                Math.random() > .7 && (G(.7), setTimeout(() => {
                  G(0)
                }, 100))
              }, 200);
            return () => {
              clearInterval(e), clearInterval(t), clearInterval(a)
            }
          }, [B]), (0, n.useEffect)(() => {
            if (-1 !== _.findIndex(t => t.id === e)) {
              for (let t = 0; t < R.length; t++)
                if (R[t].some(t => t.id === e)) {
                  O(t);
                  break
                }
            }
          }, [e, _, R]);
          let Z = a => {
              if (H) return;
              let s = R.length - 1,
                l = "left" === a ? Math.max(0, K - 1) : Math.min(s, K + 1);
              l !== K && (U(!0), Q(a), setTimeout(() => {
                if (O(l), R[l] && R[l].length > 0) {
                  let a = R[l][0];
                  a.id !== e && t(a.id)
                }
                setTimeout(() => {
                  U(!1), Q(null)
                }, 300)
              }, 300))
            },
            $ = e => {
              V(e.targetTouches[0].clientX)
            },
            ee = e => {
              J(e.targetTouches[0].clientX)
            },
            et = () => {
              if (!X || !W) return;
              let e = X - W;
              e > 30 && K < R.length - 1 ? Z("right") : e < -30 && K > 0 && Z("left"), V(null), J(null)
            },
            ea = () => {
              switch (e) {
                case "messages":
                default:
                  return (0, s.jsx)(u, {
                    onNavigateToGallery: () => t("gallery")
                  });
                case "gallery":
                  return (0, s.jsx)(m, {
                    onNavigateToMusic: () => t("music")
                  });
                case "music":
                  return (0, s.jsx)(g, {
                    isPlaying: b,
                    onNavigateToNotes: () => t("notes")
                  });
                case "notes":
                  return (0, s.jsx)(x, {
                    onNavigateToClock: () => t("clock")
                  });
                case "clock":
                  return (0, s.jsx)(f, {
                    onNavigateToGame: () => t("game")
                  });
                case "game":
                  return (0, s.jsx)(h, {})
              }
            };
          (0, n.useEffect)(() => {
            "game" === e && b && j()
          }, [e, b, j]);
          let es = () => {
            console.log("Toggle play called, current state:", b), M(!0), b ? (console.log("Pausing playback"), j()) : (console.log("Starting playback"), v())
          };
          (0, n.useEffect)(() => {
            let e = e => {
                if (S && z.current) {
                  let t = z.current.getBoundingClientRect();
                  N(Math.max(0, Math.min(1, (e.clientX - t.left) / t.width)))
                }
              },
              t = () => {
                E(!1)
              };
            return S && (document.addEventListener("mousemove", e), document.addEventListener("mouseup", t)), () => {
              document.removeEventListener("mousemove", e), document.removeEventListener("mouseup", t)
            }
          }, [S, N]);
          let el = () => {
              p(!c)
            },
            er = 0 === K,
            en = K === R.length - 1,
            ei = R[K];
          return c ? (0, s.jsx)("div", {
            className: "fixed inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 z-50 flex items-center justify-center p-2 sm:p-4",
            children: (0, s.jsxs)("div", {
              className: "relative flex items-center justify-center",
              children: [(0, s.jsx)("div", {
                className: "absolute inset-0 bg-black rounded-2xl transform translate-x-1 translate-y-1 opacity-30"
              }), (0, s.jsxs)("div", {
                className: "relative bg-gray-800 rounded-2xl p-1 shadow-2xl border-2 border-gray-700  flex flex-col overflow-hidden /* Mobile Portrait - Responsive width, fixed compact height */ w-[90vw] h-[75vh] max-w-[380px] max-h-[650px] min-h-[500px] /* Small Mobile Adjustments */ xs:w-[85vw] xs:h-[70vh] /* Mobile Landscape & Small Tablets - Slightly larger */ sm:w-[450px] sm:h-[650px] /* Medium screens and up - Original size */ md:w-[450px] md:h-[650px]",
                children: [(0, s.jsxs)("div", {
                  className: "flex justify-between items-center px-2 sm:px-3 py-1 sm:py-2 bg-gray-900 rounded-t-2xl flex-shrink-0",
                  children: [(0, s.jsxs)("button", {
                    className: "bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 sm:p-2 shadow-lg transition-all duration-200 active:scale-95",
                    onClick: el,
                    "aria-label": "Exit Fullscreen",
                    children: [(0, s.jsx)(i.Wsx, {
                      size: 10,
                      className: "sm:hidden"
                    }), (0, s.jsx)(i.Wsx, {
                      size: 12,
                      className: "hidden sm:block"
                    })]
                  }), (0, s.jsxs)("div", {
                    className: "flex items-center space-x-1",
                    children: [(0, s.jsx)("div", {
                      className: "w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse shadow-sm"
                    }), (0, s.jsx)("div", {
                      className: "w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full shadow-sm"
                    }), (0, s.jsx)("div", {
                      className: "w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full shadow-sm"
                    })]
                  })]
                }), (0, s.jsxs)("div", {
                  className: "flex-1 relative min-h-0 ".concat("music" === e ? "p-0 overflow-visible" : "p-0.5 sm:p-1 overflow-hidden"),
                  children: [(0, s.jsxs)("div", {
                    className: "".concat("game" === e ? "game-screen-mobile" : "music" === e ? "music-fullscreen" : "retro-screen-mobile", " \n                              w-full h-full relative \n                              ").concat("music" === e || "game" === e ? "overflow-visible pointer-events-auto" : "overflow-hidden rounded-lg sm:rounded-xl shadow-xl"),
                    children: [a && "game" !== e && "music" !== e && (0, s.jsx)("div", {
                      className: "scanline rounded-lg sm:rounded-xl"
                    }), "game" !== e && "music" !== e && "notes" !== e && "clock" !== e && (0, s.jsxs)(s.Fragment, {
                      children: [(0, s.jsx)("div", {
                        className: "absolute top-0 left-0 w-full h-1 sm:h-2 bg-gradient-to-r from-green-400 to-green-500 opacity-40 rounded-t-lg sm:rounded-t-xl"
                      }), (0, s.jsx)("div", {
                        className: "absolute bottom-0 left-0 w-full h-1 sm:h-2 bg-gradient-to-r from-green-400 to-green-500 opacity-40 rounded-b-lg sm:rounded-b-xl"
                      })]
                    }), (0, s.jsx)("div", {
                      className: "w-full h-full relative z-0 \n                                ".concat("game" === e || "notes" === e || "music" === e ? "p-0" : "messages" === e ? "p-1 sm:p-2 overflow-y-auto" : "p-2 sm:p-4 overflow-y-auto", " \n                                ").concat("music" === e || "game" === e || "notes" === e || "clock" === e ? "pointer-events-auto" : ""),
                      children: C || "music" !== e ? ea() : (0, s.jsxs)("div", {
                        className: "h-full flex flex-col items-center justify-center",
                        children: [(0, s.jsxs)("button", {
                          onClick: es,
                          className: "bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition hover:scale-105",
                          children: [(0, s.jsx)(i.gSK, {
                            className: "inline mr-2"
                          }), " Klik untuk Mulai Musik"]
                        }), (0, s.jsx)("p", {
                          className: "text-xs mt-4 text-center max-w-[80%] pixel-text",
                          children: "Browser memerlukan interaksi pengguna untuk memulai pemutaran audio"
                        })]
                      })
                    })]
                  }), (0, s.jsx)("div", {
                    className: "absolute inset-0 ".concat("messages" === e || "gallery" === e || "music" === e || "game" === e || "notes" === e || "clock" === e ? "pointer-events-none" : "pointer-events-auto"),
                    ref: D,
                    onTouchStart: "messages" !== e && "gallery" !== e && "music" !== e && "game" !== e && "notes" !== e && "clock" !== e ? $ : void 0,
                    onTouchMove: "messages" !== e && "gallery" !== e && "music" !== e && "game" !== e && "notes" !== e && "clock" !== e ? ee : void 0,
                    onTouchEnd: "messages" !== e && "gallery" !== e && "music" !== e && "game" !== e && "notes" !== e && "clock" !== e ? et : void 0,
                    children: "messages" !== e && "gallery" !== e && "music" !== e && "game" !== e && "notes" !== e && "clock" !== e && (0, s.jsxs)(s.Fragment, {
                      children: [(0, s.jsx)("div", {
                        className: "absolute left-0 top-0 w-8 sm:w-16 h-full z-10",
                        onClick: () => !er && Z("left")
                      }), (0, s.jsx)("div", {
                        className: "absolute right-0 top-0 w-8 sm:w-16 h-full z-10",
                        onClick: () => !en && Z("right")
                      })]
                    })
                  })]
                })]
              })]
            })
          }) : (0, s.jsxs)("div", {
            className: "jsx-28050d92cc8a4166 w-full h-full px-0 sm:px-2 py-2 sm:py-4 flex items-center justify-center",
            children: [(0, s.jsxs)("div", {
              className: "jsx-28050d92cc8a4166 bg-pink-500 p-3 sm:p-4 rounded-3xl shadow-xl border-4 border-black relative w-full max-w-[380px] mx-auto",
              children: [(0, s.jsx)("div", {
                className: "jsx-28050d92cc8a4166 text-center mb-1 sm:mb-3",
                children: (0, s.jsx)("h2", {
                  className: "jsx-28050d92cc8a4166 text-white font-bold tracking-wider text-lg pixel-text",
                  children: "MUSIC PLAYER"
                })
              }), (0, s.jsxs)("div", {
                className: "jsx-28050d92cc8a4166 " + "".concat("game" === e ? "game-screen" : "music" === e ? "music-screen-container" : "notes" === e ? "notes-screen-container" : "clock" === e ? "music-screen-container" : "retro-screen", " h-56 sm:h-64 mb-3 sm:mb-4 overflow-hidden relative rounded-2xl"),
                children: [a && "game" !== e && (0, s.jsx)("div", {
                  className: "jsx-28050d92cc8a4166 scanline rounded-2xl"
                }), "game" !== e && "music" !== e && "notes" !== e && "clock" !== e && (0, s.jsxs)(s.Fragment, {
                  children: [(0, s.jsx)("div", {
                    className: "jsx-28050d92cc8a4166 absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-green-500 opacity-30"
                  }), (0, s.jsx)("div", {
                    className: "jsx-28050d92cc8a4166 absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-green-500 opacity-30"
                  })]
                }), (0, s.jsx)("div", {
                  className: "jsx-28050d92cc8a4166 " + "h-full relative z-0 ".concat("game" === e || "notes" === e || "music" === e ? "p-0 overflow-hidden" : "messages" === e ? "p-1 sm:p-2 overflow-y-auto" : "p-4 overflow-y-auto"),
                  children: C || "music" !== e ? ea() : (0, s.jsxs)("div", {
                    className: "jsx-28050d92cc8a4166 h-full flex flex-col items-center justify-center",
                    children: [(0, s.jsxs)("button", {
                      onClick: es,
                      className: "jsx-28050d92cc8a4166 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition hover:scale-105",
                      children: [(0, s.jsx)(i.gSK, {
                        className: "inline mr-2"
                      }), " Klik untuk Mulai Musik"]
                    }), (0, s.jsx)("p", {
                      className: "jsx-28050d92cc8a4166 text-xs mt-4 text-center max-w-[80%] pixel-text",
                      children: "Browser memerlukan interaksi pengguna untuk memulai pemutaran audio"
                    })]
                  })
                })]
              }), (0, s.jsx)("div", {
                className: "jsx-28050d92cc8a4166 flex justify-center mb-4",
                children: (0, s.jsx)("button", {
                  onClick: el,
                  "aria-label": "Open Fullscreen",
                  className: "jsx-28050d92cc8a4166 nav-menu-btn-primary flex items-center justify-center py-3 px-6 rounded-xl transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 shadow-lg",
                  children: (0, s.jsxs)("div", {
                    className: "jsx-28050d92cc8a4166 flex items-center space-x-2",
                    children: [(0, s.jsx)(i._AH, {
                      size: 18,
                      className: "text-white"
                    }), (0, s.jsx)("span", {
                      className: "jsx-28050d92cc8a4166 pixel-text text-white font-bold text-sm",
                      children: "OPEN"
                    })]
                  })
                })
              }), (0, s.jsxs)("div", {
                ref: D,
                onTouchStart: $,
                onTouchMove: ee,
                onTouchEnd: et,
                className: "jsx-28050d92cc8a4166 relative mb-3 sm:mb-4 select-none py-1",
                children: [(0, s.jsxs)("div", {
                  className: "jsx-28050d92cc8a4166 flex justify-between items-center",
                  children: [(0, s.jsx)("button", {
                    onClick: () => !er && Z("left"),
                    "aria-label": "Previous menu",
                    disabled: er,
                    className: "jsx-28050d92cc8a4166 " + "nav-arrow-btn bg-gray-800 text-white rounded-full p-2 z-10 transition-all duration-200 ".concat(er ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700 active:scale-95"),
                    children: (0, s.jsx)(i._Jj, {
                      size: 16
                    })
                  }), (0, s.jsx)("div", {
                    className: "jsx-28050d92cc8a4166 flex-1 overflow-hidden relative px-2 mx-1",
                    children: (0, s.jsx)("div", {
                      style: {
                        padding: "4px 0"
                      },
                      className: "jsx-28050d92cc8a4166 " + "flex justify-center items-stretch space-x-4 transition-all duration-300 ".concat(H ? "left" === q ? "animate-slide-left" : "animate-slide-right" : ""),
                      children: ei.map(a => (0, s.jsx)("button", {
                        onClick: () => {
                          t(a.id), ("music" === a.id || "game" === a.id) && M(!0)
                        },
                        "aria-label": a.label,
                        className: "jsx-28050d92cc8a4166 " + "nav-menu-btn flex-1 flex items-center justify-center py-2 px-2 rounded-xl transition-all duration-300 ease-in-out ".concat(e === a.id ? "nav-menu-btn-active" : "bg-gray-800 text-white hover:bg-gray-700"),
                        children: (0, s.jsx)("div", {
                          className: "jsx-28050d92cc8a4166 icon-container",
                          children: a.icon
                        })
                      }, a.id))
                    })
                  }), (0, s.jsx)("button", {
                    onClick: () => !en && Z("right"),
                    "aria-label": "Next menu",
                    disabled: en,
                    className: "jsx-28050d92cc8a4166 " + "nav-arrow-btn bg-gray-800 text-white rounded-full p-2 z-10 transition-all duration-200 ".concat(en ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700 active:scale-95"),
                    children: (0, s.jsx)(i.X6T, {
                      size: 16
                    })
                  })]
                }), (0, s.jsx)("div", {
                  className: "jsx-28050d92cc8a4166 flex justify-center mt-2 space-x-3",
                  children: [0, 1].map(e => (0, s.jsx)("div", {
                    onClick: () => {
                      e !== K && (Q(e > K ? "right" : "left"), U(!0), setTimeout(() => {
                        O(e), R[e] && R[e].length > 0 && t(R[e][0].id), setTimeout(() => {
                          U(!1), Q(null)
                        }, 300)
                      }, 50))
                    },
                    className: "jsx-28050d92cc8a4166 " + "transition-all duration-300 rounded-full cursor-pointer ".concat(e === K ? "bg-white w-4 h-4 shadow-sm" : "bg-gray-600 w-3 h-3 opacity-70 hover:opacity-100")
                  }, e))
                })]
              }), (0, s.jsxs)("div", {
                className: "jsx-28050d92cc8a4166 flex justify-center items-center space-x-4 sm:space-x-5 mb-3 sm:mb-4",
                children: [(0, s.jsx)("button", {
                  onClick: () => {
                    M(!0), y()
                  },
                  "aria-label": "Previous",
                  className: "jsx-28050d92cc8a4166 retro-button w-12 h-12 sm:w-14 sm:h-14 rounded-full hover:bg-gray-900 active:bg-black active:scale-95 transition-transform",
                  children: (0, s.jsx)(i.r7n, {
                    size: 18
                  })
                }), (0, s.jsx)("button", {
                  onClick: () => {
                    M(!0), es()
                  },
                  "aria-label": b ? "Pause" : "Play",
                  className: "jsx-28050d92cc8a4166 retro-button w-14 h-14 sm:w-16 sm:h-16 rounded-full hover:bg-gray-900 active:bg-black active:scale-95 transition-transform",
                  children: b ? (0, s.jsx)(i.kwt, {
                    size: 24
                  }) : (0, s.jsx)(i.gSK, {
                    size: 24,
                    className: "ml-1"
                  })
                }), (0, s.jsx)("button", {
                  onClick: () => {
                    M(!0), w()
                  },
                  "aria-label": "Next",
                  className: "jsx-28050d92cc8a4166 retro-button w-12 h-12 sm:w-14 sm:h-14 rounded-full hover:bg-gray-900 active:bg-black active:scale-95 transition-transform",
                  children: (0, s.jsx)(i.LxX, {
                    size: 18
                  })
                })]
              }), (0, s.jsxs)("div", {
                className: "jsx-28050d92cc8a4166 flex items-center space-x-2 px-1",
                children: [(0, s.jsx)(i.pPd, {
                  size: 16,
                  className: "text-white"
                }), (0, s.jsxs)("div", {
                  onClick: e => {
                    if (M(!0), z.current) {
                      let t = z.current.getBoundingClientRect();
                      N(Math.max(0, Math.min(1, (e.clientX - t.left) / t.width)))
                    }
                  },
                  ref: z,
                  className: "jsx-28050d92cc8a4166 flex-1 h-2 bg-gray-700 rounded-full cursor-pointer relative",
                  children: [(0, s.jsx)("div", {
                    style: {
                      width: "".concat(100 * k, "%")
                    },
                    className: "jsx-28050d92cc8a4166 h-full bg-white rounded-full"
                  }), (0, s.jsx)("div", {
                    style: {
                      left: "calc(".concat(100 * k, "% - 8px)")
                    },
                    onMouseDown: e => {
                      e.preventDefault(), M(!0), E(!0)
                    },
                    className: "jsx-28050d92cc8a4166 absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md cursor-grab"
                  })]
                })]
              }), (0, s.jsxs)("div", {
                style: {
                  boxShadow: P ? "".concat(B[A].glow, ", inset 0 0 2px rgba(0,0,0,0.5)") : "inset 0 0 2px rgba(0,0,0,0.5)",
                  filter: F > 0 ? "brightness(".concat(1 + F, ")") : "none"
                },
                className: "jsx-28050d92cc8a4166 " + "absolute top-2 right-2 w-6 h-6 rounded-full ".concat(T, " border-2 border-black transition-all duration-300 ").concat(P ? "opacity-100" : "opacity-70", " overflow-hidden indicator-light"),
                children: [(0, s.jsx)("div", {
                  style: {
                    clipPath: "polygon(0 0, 100% 0, 100% 30%, 0 70%)",
                    transform: "translateY(-50%)",
                    height: "200%"
                  },
                  className: "jsx-28050d92cc8a4166 absolute inset-0 w-full h-full bg-white opacity-30 rounded-full"
                }), (0, s.jsx)("div", {
                  style: {
                    top: "20%",
                    left: "20%"
                  },
                  className: "jsx-28050d92cc8a4166 absolute w-2 h-2 bg-white rounded-full opacity-80"
                }), (0, s.jsx)("div", {
                  style: {
                    backgroundImage: "radial-gradient(circle, transparent 30%, rgba(0,0,0,0.3) 70%)"
                  },
                  className: "jsx-28050d92cc8a4166 absolute inset-0 opacity-10"
                })]
              })]
            }), (0, s.jsx)(r(), {
              id: "28050d92cc8a4166",
              children: "@-webkit-keyframes shine{0%{-webkit-transform:translatex(-100%);transform:translatex(-100%)}100%{-webkit-transform:translatex(100%);transform:translatex(100%)}}@-moz-keyframes shine{0%{-moz-transform:translatex(-100%);transform:translatex(-100%)}100%{-moz-transform:translatex(100%);transform:translatex(100%)}}@-o-keyframes shine{0%{-o-transform:translatex(-100%);transform:translatex(-100%)}100%{-o-transform:translatex(100%);transform:translatex(100%)}}@keyframes shine{0%{-webkit-transform:translatex(-100%);-moz-transform:translatex(-100%);-o-transform:translatex(-100%);transform:translatex(-100%)}100%{-webkit-transform:translatex(100%);-moz-transform:translatex(100%);-o-transform:translatex(100%);transform:translatex(100%)}}@-webkit-keyframes flicker{0%,100%{opacity:1}50%{opacity:.8}}@-moz-keyframes flicker{0%,100%{opacity:1}50%{opacity:.8}}@-o-keyframes flicker{0%,100%{opacity:1}50%{opacity:.8}}@keyframes flicker{0%,100%{opacity:1}50%{opacity:.8}}.indicator-light{background-image:-webkit-radial-gradient(30%30%,circle,rgba(255,255,255,.4)0%,rgba(255,255,255,0)70%);background-image:-moz-radial-gradient(30%30%,circle,rgba(255,255,255,.4)0%,rgba(255,255,255,0)70%);background-image:-o-radial-gradient(30%30%,circle,rgba(255,255,255,.4)0%,rgba(255,255,255,0)70%);background-image:radial-gradient(circle at 30%30%,rgba(255,255,255,.4)0%,rgba(255,255,255,0)70%)}"
            })]
          })
        }
    },
    6713: (e, t, a) => {
      "use strict";
      a.d(t, {
        default: () => o,
        n: () => i
      });
      var s = a(5155),
        l = a(2115),
        r = a(8919);
      let n = (0, l.createContext)(void 0),
        i = () => {
          let e = (0, l.useContext)(n);
          if (!e) throw Error("useAudio must be used within an AudioProvider");
          return e
        },
        o = e => {
          let {
            children: t
          } = e, [a] = (0, l.useState)(() => {
            {
              let e = new Audio;
              return e.preload = "metadata", e.crossOrigin = "anonymous", e.volume = .8, e
            }
          }), [i, o] = (0, l.useState)(r.dY[0]), [c, d] = (0, l.useState)(!1), [u, m] = (0, l.useState)(0), [g, x] = (0, l.useState)(.8), [f, h] = (0, l.useState)(0), [p, b] = (0, l.useState)(0), [v, j] = (0, l.useState)(!0), [w, y] = (0, l.useState)(null), [k, N] = (0, l.useState)(!1), S = (0, l.useRef)(0), E = (0, l.useRef)(null), z = (0, l.useRef)(!1);
          (0, l.useEffect)(() => {
            a && (a.volume = g)
          }, [a, g]);
          let C = e => {
              let [t, a] = e.split(":").map(Number);
              return 60 * t + a
            },
            M = (0, l.useCallback)(() => {
              E.current && (clearInterval(E.current), E.current = null)
            }, []),
            T = (0, l.useCallback)(() => {
              let e = (r.dY.findIndex(e => e.id === i.id) + 1) % r.dY.length,
                t = r.dY[e];
              t.id !== i.id && (a && v && a.pause(), M(), o(t), m(0), h(0), S.current = 0, y(null))
            }, [i, r.dY, a, v, M]),
            I = (0, l.useCallback)(() => {
              let e = (r.dY.findIndex(e => e.id === i.id) - 1 + r.dY.length) % r.dY.length,
                t = r.dY[e];
              t.id !== i.id && (a && v && a.pause(), M(), o(t), m(0), h(0), S.current = 0, y(null))
            }, [i, r.dY, a, v, M]),
            P = (0, l.useCallback)(() => {
              M();
              let e = C(i.duration);
              console.log("Starting simulation from:", S.current, "seconds"), E.current = setInterval(() => {
                if (!z.current) return void M();
                h(t => {
                  let a = t + 1;
                  return (m(a / e * 100), a >= e) ? (M(), d(!1), z.current = !1, h(0), m(0), S.current = 0, setTimeout(() => {
                    T()
                  }, 500), 0) : (S.current = a, a)
                })
              }, 1e3)
            }, [i.duration, T, M]);
          (0, l.useEffect)(() => {
            if (a)
              if (console.log("Loading new song:", i.title), y(null), h(0), m(0), S.current = 0, M(), i.audioSrc) try {
                a.src = i.audioSrc, a.load(), j(!0);
                let e = () => {
                    console.log("Audio metadata loaded, duration:", a.duration), b(a.duration)
                  },
                  t = () => {
                    console.log("Audio can play"), z.current && k && a.play().catch(e => {
                      console.log("Autoplay failed:", e), j(!1), b(C(i.duration)), z.current && P()
                    })
                  },
                  s = () => {
                    if (v && void 0 !== a.currentTime) {
                      h(a.currentTime);
                      let e = a.currentTime / a.duration * 100;
                      m(e), S.current = a.currentTime
                    }
                  },
                  l = () => {
                    console.log("Audio ended"), d(!1), z.current = !1, h(0), m(0), S.current = 0, setTimeout(() => {
                      T()
                    }, 500)
                  },
                  r = () => {
                    console.log("Audio error, falling back to simulation"), j(!1), b(C(i.duration)), z.current && P()
                  };
                return a.addEventListener("loadedmetadata", e), a.addEventListener("canplay", t), a.addEventListener("timeupdate", s), a.addEventListener("ended", l), a.addEventListener("error", r), () => {
                  a.removeEventListener("loadedmetadata", e), a.removeEventListener("canplay", t), a.removeEventListener("timeupdate", s), a.removeEventListener("ended", l), a.removeEventListener("error", r)
                }
              } catch (e) {
                console.error("Error loading audio:", e), j(!1), b(C(i.duration))
              } else j(!1), b(C(i.duration))
          }, [i, a, k, v, P, M, T]);
          let L = (0, l.useCallback)(e => {
              console.log("Selecting song:", e.title), e.id !== i.id && (a && v && a.pause(), M(), o(e), m(0), h(0), S.current = 0, y(null), z.current && k && setTimeout(() => {
                v && a ? a.play().catch(() => {
                  j(!1), P()
                }) : P()
              }, 100))
            }, [a, v, i.id, k, M, P]),
            A = (0, l.useCallback)(() => {
              if (console.log("Play function called"), N(!0), y(null), z.current) return void console.log("Already playing");
              d(!0), z.current = !0, a && v && i.audioSrc ? (S.current > 0 && (a.currentTime = S.current), a.play().then(() => {
                console.log("Audio playing successfully")
              }).catch(e => {
                console.log("Audio play failed:", e), j(!1), b(C(i.duration)), "NotAllowedError" === e.name ? y("Klik tombol play untuk memulai musik") : y("File audio tidak dapat diputar, menggunakan mode simulasi"), P()
              })) : (v || b(C(i.duration)), P())
            }, [a, v, i.audioSrc, i.duration, P]),
            Y = (0, l.useCallback)(() => {
              if (console.log("Pause function called"), !z.current) return void console.log("Already paused");
              d(!1), z.current = !1, a && v ? (a.pause(), S.current = a.currentTime, console.log("Audio paused at:", S.current)) : console.log("Simulation paused at:", S.current), M()
            }, [a, v, M]),
            F = (0, l.useCallback)(e => {
              x(e), a && (a.volume = e)
            }, [a]),
            G = (0, l.useCallback)(e => {
              let t = e / 100 * (v && (null == a ? void 0 : a.duration) ? a.duration : C(i.duration));
              m(e), h(t), S.current = t, a && v && (a.currentTime = t)
            }, [a, v, i.duration]);
          return (0, l.useEffect)(() => () => {
            M(), a && a.pause()
          }, [a, M]), (0, s.jsx)(n.Provider, {
            value: {
              currentSong: i,
              isPlaying: c,
              progress: u,
              volume: g,
              currentTime: f,
              duration: p,
              play: A,
              pause: Y,
              next: T,
              prev: I,
              setVolume: F,
              selectSong: L,
              setProgress: G,
              audioError: w
            },
            children: t
          })
        }
    },
    8919: (e, t, a) => {
      "use strict";
      a.d(t, {
        KQ: () => l,
        Ld: () => r,
        dY: () => s
      });
      let s = [{
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
        l = [{
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
        r = [{
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
      [...l, ...r]
    }
  },
  e => {
    var t = t => e(e.s = t);
    e.O(0, [479, 711, 670, 441, 684, 358], () => t(1508)), _N_E = e.O()
  }
]);

