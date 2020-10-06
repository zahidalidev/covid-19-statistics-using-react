(this.webpackJsonpchart = this.webpackJsonpchart || []).push([
    [0], {
        100: function(e, t, a) {
            e.exports = a(223)
        },
        21: function(e, t, a) {
            e.exports = {
                container: "Cards_container__Rosh5",
                card: "Cards_card__2xoIz",
                infected: "Cards_infected__95jgZ",
                recovered: "Cards_recovered__156fl",
                deaths: "Cards_deaths__2SHQm"
            }
        },
        219: function(e, t, a) {},
        223: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                o = a(25),
                c = a.n(o),
                s = a(4),
                l = a.n(s),
                i = a(7),
                u = a(11),
                m = a(12),
                d = a(13),
                h = a(14),
                f = a(240),
                p = a(245),
                v = a(241),
                y = a(242),
                b = a(21),
                g = a.n(b),
                S = a(8),
                E = a.n(S),
                C = a(17),
                x = a.n(C),
                w = function(e) {
                    var t = e.data,
                        a = t.confirmed,
                        n = t.recovered,
                        o = t.deaths,
                        c = t.lastUpdate;
                    return a ? r.a.createElement("div", {
                        className: g.a.container
                    }, r.a.createElement(f.a, {
                        container: !0,
                        spacing: 3,
                        justify: "center"
                    }, r.a.createElement(f.a, {
                        item: !0,
                        component: p.a,
                        xs: 12,
                        md: 3,
                        className: x()(g.a.card, g.a.infected)
                    }, r.a.createElement(v.a, null, r.a.createElement(y.a, {
                        color: "textSecondry",
                        gutterBottom: !0
                    }, "Infected"), r.a.createElement(y.a, {
                        variant: "h5"
                    }, r.a.createElement(E.a, {
                        start: 0,
                        end: a.value,
                        duration: 2.5,
                        separator: ","
                    })), r.a.createElement(y.a, {
                        color: "textSecondry"
                    }, new Date(c).toDateString()), r.a.createElement(y.a, {
                        variant: "body2"
                    }, "Number of active cases of COVID-19"))), r.a.createElement(f.a, {
                        item: !0,
                        component: p.a,
                        xs: 12,
                        md: 3,
                        className: x()(g.a.card, g.a.recovered)
                    }, r.a.createElement(v.a, null, r.a.createElement(y.a, {
                        color: "textSecondry",
                        gutterBottom: !0
                    }, "Recovered"), r.a.createElement(y.a, {
                        variant: "h5"
                    }, r.a.createElement(E.a, {
                        start: 0,
                        end: n.value,
                        duration: 2.5,
                        separator: ","
                    })), r.a.createElement(y.a, {
                        color: "textSecondry"
                    }, new Date(c).toDateString()), r.a.createElement(y.a, {
                        variant: "body2"
                    }, "Number of recoveries from COVID-19"))), r.a.createElement(f.a, {
                        item: !0,
                        component: p.a,
                        xs: 12,
                        md: 3,
                        className: x()(g.a.card, g.a.deaths)
                    }, r.a.createElement(v.a, null, r.a.createElement(y.a, {
                        color: "textSecondry",
                        gutterBottom: !0
                    }, "Deaths"), r.a.createElement(y.a, {
                        variant: "h5"
                    }, r.a.createElement(E.a, {
                        start: 0,
                        end: o.value,
                        duration: 2.5,
                        separator: ","
                    })), r.a.createElement(y.a, {
                        color: "textSecondry"
                    }, new Date(c).toDateString()), r.a.createElement(y.a, {
                        variant: "body2"
                    }, "Number of deaths cause by COVID-19"))))) : "Loading...."
                },
                O = a(45),
                j = a(15),
                k = a.n(j),
                _ = " https://covid19.mathdro.id/api",
                N = function() {
                    var e = Object(i.a)(l.a.mark((function e(t) {
                        var a, n, r, o, c, s, i;
                        return l.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = _, t && (a = "".concat(_, "/countries/").concat(t)), e.prev = 2, e.next = 5, k.a.get(a);
                                case 5:
                                    return n = e.sent, r = n.data, o = r.confirmed, c = r.recovered, s = r.deaths, i = r.lastUpdate, e.abrupt("return", {
                                        confirmed: o,
                                        recovered: c,
                                        deaths: s,
                                        lastUpdate: i
                                    });
                                case 14:
                                    e.prev = 14, e.t0 = e.catch(2), console.log(e.t0);
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 14]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                B = function() {
                    var e = Object(i.a)(l.a.mark((function e() {
                        var t, a, n;
                        return l.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, k.a.get("".concat(_, "/daily"));
                                case 3:
                                    return t = e.sent, a = t.data, n = a.map((function(e) {
                                        return {
                                            confirmed: e.confirmed.total,
                                            deaths: e.deaths.total,
                                            date: e.reportDate
                                        }
                                    })), e.abrupt("return", n);
                                case 9:
                                    e.prev = 9, e.t0 = e.catch(0), console.log(e.t0);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 9]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                D = function() {
                    var e = Object(i.a)(l.a.mark((function e() {
                        var t, a;
                        return l.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, k.a.get("".concat(_, "/countries"));
                                case 3:
                                    return t = e.sent, a = t.data.countries, e.abrupt("return", a.map((function(e) {
                                        return e.name
                                    })));
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(0), console.log(e.t0);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 8]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                I = a(59),
                z = a(95),
                A = a.n(z),
                W = function(e) {
                    var t = e.data,
                        a = t.confirmed,
                        o = t.recovered,
                        c = t.deaths,
                        s = e.country,
                        u = Object(n.useState)([]),
                        m = Object(O.a)(u, 2),
                        d = m[0],
                        h = m[1];
                    Object(n.useEffect)((function() {
                        (function() {
                            var e = Object(i.a)(l.a.mark((function e() {
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.t0 = h, e.next = 3, B();
                                        case 3:
                                            e.t1 = e.sent, (0, e.t0)(e.t1);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        })()()
                    }), []);
                    var f = d.length ? r.a.createElement(I.b, {
                            data: {
                                labels: d.map((function(e) {
                                    return e.date
                                })),
                                datasets: [{
                                    data: d.map((function(e) {
                                        return e.confirmed
                                    })),
                                    label: "Infected",
                                    borderColor: "#3333ff",
                                    fill: !0
                                }, {
                                    data: d.map((function(e) {
                                        return e.deaths
                                    })),
                                    label: "Deaths",
                                    borderColor: "red",
                                    backgroundColor: "rgba(255, 0, 0, 0.5)",
                                    fill: !0
                                }]
                            }
                        }) : null,
                        p = a ? r.a.createElement(I.a, {
                            data: {
                                labels: ["Infected", "Recovered", "Deaths"],
                                datasets: [{
                                    label: "People",
                                    backgroundColor: ["rgba(0, 0, 255, 0.5)", "rgba(0, 255, 0, 0.5)", "rgba(255, 0, 0, 0.5)"],
                                    data: [a.value, o.value, c.value]
                                }]
                            },
                            option: {
                                legend: {
                                    display: !0,
                                    label: "recovered"
                                },
                                title: {
                                    display: !0,
                                    text: "Current state in ".concat(s)
                                }
                            }
                        }) : null;
                    return r.a.createElement("div", {
                        className: A.a.container
                    }, s ? p : f)
                },
                M = a(244),
                R = a(243),
                P = a(96),
                L = a.n(P),
                Q = function(e) {
                    var t = e.handleCountryChange,
                        a = Object(n.useState)([]),
                        o = Object(O.a)(a, 2),
                        c = o[0],
                        s = o[1];
                    return Object(n.useEffect)((function() {
                        (function() {
                            var e = Object(i.a)(l.a.mark((function e() {
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.t0 = s, e.next = 3, D();
                                        case 3:
                                            e.t1 = e.sent, (0, e.t0)(e.t1);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        })()()
                    }), [s]), r.a.createElement(M.a, {
                        className: L.a.formControl
                    }, r.a.createElement(R.a, {
                        defaultValue: "",
                        onChange: function(e) {
                            return t(e.target.value)
                        }
                    }, r.a.createElement("option", {
                        value: ""
                    }, "Global"), c.map((function(e, t) {
                        return r.a.createElement("option", {
                            key: t,
                            value: e
                        }, e)
                    }))))
                },
                T = a(97),
                F = a.n(T),
                V = function(e) {
                    Object(h.a)(a, e);
                    var t = Object(d.a)(a);

                    function a() {
                        var e;
                        Object(u.a)(this, a);
                        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(r))).state = {
                            data: {},
                            country: ""
                        }, e.handleCountryChange = function() {
                            var t = Object(i.a)(l.a.mark((function t(a) {
                                var n;
                                return l.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, N(a);
                                        case 2:
                                            n = t.sent, e.setState({
                                                data: n,
                                                country: a
                                            });
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }(), e
                    }
                    return Object(m.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(i.a)(l.a.mark((function e() {
                                var t;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, N();
                                        case 2:
                                            t = e.sent, this.setState({
                                                data: t
                                            });
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.data,
                                a = e.country;
                            return r.a.createElement("div", {
                                className: F.a.container
                            }, r.a.createElement(w, {
                                data: t
                            }), r.a.createElement(Q, {
                                handleCountryChange: this.handleCountryChange
                            }), r.a.createElement(W, {
                                data: t,
                                country: a
                            }))
                        }
                    }]), a
                }(n.Component),
                J = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

            function U(e) {
                navigator.serviceWorker.register(e).then((function(e) {
                    e.onupdatefound = function() {
                        var t = e.installing;
                        t.onstatechange = function() {
                            "installed" === t.state && (navigator.serviceWorker.controller ? console.log("New content is available; please refresh.") : console.log("Content is cached for offline use."))
                        }
                    }
                })).catch((function(e) {
                    console.error("Error during service worker registration:", e)
                }))
            }
            var G = a(20),
                q = (a(219), a(60)),
                H = a.n(q),
                X = (a(88), a(89), function(e) {
                    var t = e.onValue,
                        a = e.onAutoFocus,
                        n = e.onSearch;
                    return r.a.createElement("form", {
                        className: "form-input form-inline active-cyan-4 col-sm-12"
                    }, r.a.createElement("i", {
                        style: {
                            color: "#00122f",
                            paddingRight: 20,
                            fontSize: 20
                        },
                        className: "fa fa-search",
                        "aria-hidden": "true"
                    }), r.a.createElement("input", {
                        className: "form-control form-control-sm mr-3 w-75",
                        style: {
                            boxShadow: "2px 2px 2px 2px #00122f",
                            padding: 20
                        },
                        value: t,
                        type: "text",
                        name: "search",
                        autoFocus: a,
                        placeholder: "Enter any Country...",
                        onChange: n
                    }))
                }),
                Y = a(98),
                Z = (a(220), a(61)),
                $ = a(63),
                K = function(e) {
                    Object(h.a)(a, e);
                    var t = Object(d.a)(a);

                    function a() {
                        var e;
                        Object(u.a)(this, a);
                        for (var n = arguments.length, o = new Array(n), c = 0; c < n; c++) o[c] = arguments[c];
                        return (e = t.call.apply(t, [this].concat(o))).raseSort = function(t) {
                            var a = Object(Y.a)({}, e.props.sortColumn);
                            a.path === t ? a.order = "asc" === a.order ? "desc" : "asc" : (a.path = t, a.order = "asc"), e.props.onSort(a)
                        }, e.renderSortIcon = function(t) {
                            var a = e.props.sortColumn;
                            return t !== a.path ? null : "asc" === a.order ? r.a.createElement(Z.a, {
                                style: {
                                    color: "#f6ff00"
                                },
                                icon: $.a
                            }) : r.a.createElement(Z.a, {
                                style: {
                                    color: "#00f2ff"
                                },
                                icon: $.b
                            })
                        }, e
                    }
                    return Object(m.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = t.onCountries;
                            t.onCountIndex;
                            return r.a.createElement("body", {
                                style: {
                                    marginBottom: -130
                                },
                                className: "table-Body-maincss"
                            }, r.a.createElement("div", null, r.a.createElement("div", {
                                className: "table100 ver1 m-b-110"
                            }, r.a.createElement("table", {
                                className: "table-bordered table-hover",
                                "data-vertable": "ver1"
                            }, r.a.createElement("thead", null, r.a.createElement("tr", {
                                className: "row100 head"
                            }, r.a.createElement("th", {
                                style: {
                                    cursor: "pointer",
                                    border: "2px solid rgba(43, 53, 69, 0.7)"
                                },
                                onClick: function() {
                                    return e.raseSort("country")
                                },
                                className: " clickable column100 column2",
                                "data-column": "column2"
                            }, "Country  ", this.renderSortIcon("country")), r.a.createElement("th", {
                                style: {
                                    cursor: "pointer",
                                    border: "2px solid rgba(43, 53, 69, 0.7)"
                                },
                                onClick: function() {
                                    return e.raseSort("cases")
                                },
                                className: " clickable column100 column3",
                                "data-column": "column3"
                            }, "Cases ", this.renderSortIcon("cases")), r.a.createElement("th", {
                                style: {
                                    cursor: "pointer",
                                    border: "2px solid rgba(43, 53, 69, 0.7)"
                                },
                                onClick: function() {
                                    return e.raseSort("todayCases")
                                },
                                className: " clickable column100 column4",
                                "data-column": "column4"
                            }, "Cases Today ", this.renderSortIcon("todayCases"), " "), r.a.createElement("th", {
                                style: {
                                    cursor: "pointer",
                                    border: "2px solid rgba(43, 53, 69, 0.7)"
                                },
                                onClick: function() {
                                    return e.raseSort("deaths")
                                },
                                className: " clickable column100 column5",
                                "data-column": "column5"
                            }, "Deaths ", this.renderSortIcon("deaths"), " "), r.a.createElement("th", {
                                style: {
                                    cursor: "pointer",
                                    border: "2px solid rgba(43, 53, 69, 0.7)"
                                },
                                onClick: function() {
                                    return e.raseSort("todayDeaths")
                                },
                                className: " clickable column100 column6",
                                "data-column": "column6"
                            }, "Deaths Today ", this.renderSortIcon("todayDeaths"), " "), r.a.createElement("th", {
                                style: {
                                    cursor: "pointer",
                                    border: "2px solid rgba(43, 53, 69, 0.7)"
                                },
                                onClick: function() {
                                    return e.raseSort("recovered")
                                },
                                className: " clickable column100 column7",
                                "data-column": "column7"
                            }, "Recoverd ", this.renderSortIcon("recovered"), " "), r.a.createElement("th", {
                                style: {
                                    cursor: "pointer",
                                    border: "2px solid rgba(43, 53, 69, 0.7)"
                                },
                                onClick: function() {
                                    return e.raseSort("active")
                                },
                                className: " clickable column100 column8",
                                "data-column": "column8"
                            }, "Active ", this.renderSortIcon("active"), " "), r.a.createElement("th", {
                                style: {
                                    cursor: "pointer",
                                    border: "2px solid rgba(43, 53, 69, 0.7)"
                                },
                                onClick: function() {
                                    return e.raseSort("critical")
                                },
                                className: " clickable column100 column9",
                                "data-column": "column9"
                            }, "Critical ", this.renderSortIcon("critical"), " "), r.a.createElement("th", {
                                style: {
                                    cursor: "pointer",
                                    border: "2px solid rgba(43, 53, 69, 0.7)"
                                },
                                onClick: function() {
                                    return e.raseSort("casesPerOneMillion")
                                },
                                className: " clickable column100 column10",
                                "data-column": "column10"
                            }, "Case Per Million ", this.renderSortIcon("casesPerOneMillion"), " "), r.a.createElement("th", {
                                style: {
                                    cursor: "pointer",
                                    border: "2px solid rgba(43, 53, 69, 0.7)"
                                },
                                onClick: function() {
                                    return e.raseSort("deathsPerOneMillion")
                                },
                                className: " clickable column100 column11",
                                "data-column": "column11"
                            }, "Deaths Per Million ", this.renderSortIcon("deathsPerOneMillion"), " "))), r.a.createElement("tbody", null, a.map((function(e) {
                                return r.a.createElement("tr", {
                                    className: "row100",
                                    key: e.country
                                }, r.a.createElement("th", {
                                    style: {
                                        color: "white",
                                        border: "2px solid rgba(43, 53, 69, 0.7)"
                                    },
                                    className: " hoverClass column100 column2",
                                    "data-column": "column2"
                                }, e.country), r.a.createElement("td", {
                                    style: {
                                        border: "2px solid rgba(43, 53, 69, 0.7)"
                                    },
                                    className: "column100 column3",
                                    "data-column": "column3"
                                }, e.cases), r.a.createElement("td", {
                                    style: {
                                        border: "2px solid rgba(43, 53, 69, 0.7)"
                                    },
                                    className: "column100 column4",
                                    "data-column": "column4"
                                }, e.todayCases), r.a.createElement("td", {
                                    style: {
                                        border: "2px solid rgba(43, 53, 69, 0.7)"
                                    },
                                    className: "column100 column5",
                                    "data-column": "column5"
                                }, e.deaths), r.a.createElement("td", {
                                    style: {
                                        border: "2px solid rgba(43, 53, 69, 0.7)"
                                    },
                                    className: "column100 column6",
                                    "data-column": "column6"
                                }, e.todayDeaths), r.a.createElement("td", {
                                    style: {
                                        border: "2px solid rgba(43, 53, 69, 0.7)"
                                    },
                                    className: "column100 column7",
                                    "data-column": "column7"
                                }, e.recovered), r.a.createElement("td", {
                                    style: {
                                        border: "2px solid rgba(43, 53, 69, 0.7)"
                                    },
                                    className: "column100 column8",
                                    "data-column": "column8"
                                }, e.active), r.a.createElement("td", {
                                    style: {
                                        border: "2px solid rgba(43, 53, 69, 0.7)"
                                    },
                                    className: "column100 column9",
                                    "data-column": "column9"
                                }, e.critical), r.a.createElement("td", {
                                    style: {
                                        border: "2px solid rgba(43, 53, 69, 0.7)"
                                    },
                                    className: "column100 column10",
                                    "data-column": "column10"
                                }, e.casesPerOneMillion), r.a.createElement("td", {
                                    style: {
                                        border: "2px solid rgba(43, 53, 69, 0.7)"
                                    },
                                    className: "column100 column11",
                                    "data-column": "column11"
                                }, e.deathsPerOneMillion ? e.deathsPerOneMillion : 0))
                            })))))))
                        }
                    }]), a
                }(n.Component),
                ee = function(e) {
                    Object(h.a)(a, e);
                    var t = Object(d.a)(a);

                    function a() {
                        var e;
                        Object(u.a)(this, a);
                        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(r))).state = {
                            countries: [{
                                country: ""
                            }],
                            countrySerch: "",
                            totalCases: 0,
                            totalDeaths: 0,
                            totalRecoverd: 0,
                            totalActiveCases: 0,
                            totalCriticalCases: 0,
                            sortColumn: {
                                path: "cases",
                                order: "desc"
                            }
                        }, e.countIndex = function(t) {
                            return H.a.findIndex(e.state.countries, t)
                        }, e.searchMovieFun = function(t) {
                            var a = e.state.countrySerch;
                            return t.filter((function(e) {
                                return e.country.toLowerCase().startsWith(a.toLowerCase())
                            }))
                        }, e.searchMovie = function(t) {
                            var a = t.currentTarget;
                            e.setState({
                                countrySerch: a.value
                            })
                        }, e.totalWorldStat = function() {
                            var t = 0,
                                a = 0,
                                n = 0,
                                r = 0,
                                o = 0,
                                c = 0;
                            if ("USA" === Object(G.a)(e.state.countries)[0].country)
                                for (; t <= e.state.countries.length - 1;) a += e.state.countries[t].cases, n += e.state.countries[t].deaths, r += e.state.countries[t].recovered, o += e.state.countries[t].active, c += e.state.countries[t].critical, t++;
                            else a = e.state.countries[0].cases, n += e.state.countries[0].deaths, r += e.state.countries[0].recovered, o += e.state.countries[0].active, c += e.state.countries[0].critical;
                            e.setState({
                                totalCases: a,
                                totalDeaths: n,
                                totalRecoverd: r,
                                totalActiveCases: o,
                                totalCriticalCases: c
                            })
                        }, e.countrySort = function() {
                            return H.a.orderBy(e.state.countries, [e.state.sortColumn.path], [e.state.sortColumn.order])
                        }, e.handleSort = function(t) {
                            e.setState({
                                sortColumn: t
                            })
                        }, e
                    }
                    return Object(m.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(i.a)(l.a.mark((function e() {
                                var t, a;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, k.a.get("https://corona.lmao.ninja/v2/countries");
                                        case 2:
                                            t = e.sent, a = t.data, this.setState({
                                                countries: a
                                            }), this.totalWorldStat();
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.countrySort(),
                                t = this.searchMovieFun(e);
                            return r.a.createElement(r.a.Fragment, null, r.a.createElement(X, {
                                onValue: this.state.countrySerch,
                                onAutoFocus: !1,
                                onSearch: this.searchMovie,
                                goto: this
                            }), r.a.createElement(K, {
                                onCountries: t,
                                onCountIndex: this.countIndex,
                                onSort: this.handleSort,
                                sortColumn: this.state.sortColumn
                            }))
                        }
                    }]), a
                }(n.Component),
                te = a(46),
                ae = a.n(te),
                ne = function(e) {
                    Object(h.a)(a, e);
                    var t = Object(d.a)(a);

                    function a() {
                        var e;
                        Object(u.a)(this, a);
                        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(r))).state = {
                            countries: [{
                                country: ""
                            }],
                            totalCases: 0,
                            totalDeaths: 0,
                            totalRecoverd: 0
                        }, e.totalWorldStat = function() {
                            var t = 0,
                                a = 0,
                                n = 0,
                                r = 0;
                            if ("WORLD" !== Object(G.a)(e.state.countries)[0].country)
                                for (; t <= e.state.countries.length - 1;) a += e.state.countries[t].cases, n += e.state.countries[t].deaths, r += e.state.countries[t].recovered, t++;
                            else a = e.state.countries[0].cases, n += e.state.countries[0].deaths, r += e.state.countries[0].recovered;
                            e.setState({
                                totalCases: a,
                                totalDeaths: n,
                                totalRecoverd: r
                            })
                        }, e
                    }
                    return Object(m.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(i.a)(l.a.mark((function e() {
                                var t, a;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, k.a.get("https://corona.lmao.ninja/v2/countries");
                                        case 2:
                                            t = e.sent, a = t.data, this.setState({
                                                countries: a
                                            }), this.totalWorldStat();
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.totalCases,
                                a = e.totalDeaths,
                                n = e.totalRecoverd;
                            return r.a.createElement("div", {
                                className: ae.a.container
                            }, r.a.createElement(f.a, {
                                container: !0,
                                spacing: 13,
                                justify: "center"
                            }, r.a.createElement(f.a, {
                                item: !0,
                                component: p.a,
                                xs: 12,
                                md: 3,
                                className: x()(ae.a.card, ae.a.deaths)
                            }, r.a.createElement(v.a, null, r.a.createElement(y.a, {
                                style: {
                                    fontSize: 25,
                                    marginBottom: 6,
                                    fontWeight: "bold",
                                    whiteSpace: "nowrap"
                                },
                                color: "textSecondry",
                                gutterBottom: !0
                            }, "Coronavirus Cases:"), r.a.createElement(y.a, {
                                style: {
                                    fontSize: 20,
                                    marginBottom: 6,
                                    color: "blue"
                                }
                            }, r.a.createElement(E.a, {
                                start: 0,
                                end: t,
                                duration: 3,
                                separator: ","
                            })), r.a.createElement(y.a, {
                                style: {
                                    fontSize: 25,
                                    marginBottom: 6,
                                    whiteSpace: "nowrap"
                                },
                                color: "textSecondry",
                                gutterBottom: !0
                            }, "Deaths:"), r.a.createElement(y.a, {
                                style: {
                                    fontSize: 20,
                                    marginBottom: 6,
                                    color: "red"
                                }
                            }, r.a.createElement(E.a, {
                                start: 0,
                                end: a,
                                duration: 3,
                                separator: ","
                            })), r.a.createElement(y.a, {
                                style: {
                                    fontSize: 25,
                                    marginBottom: 6,
                                    whiteSpace: "nowrap"
                                },
                                color: "textSecondry",
                                gutterBottom: !0
                            }, "Recovered:"), r.a.createElement(y.a, {
                                style: {
                                    fontSize: 20,
                                    marginBottom: 6,
                                    color: "green"
                                }
                            }, r.a.createElement(E.a, {
                                start: 0,
                                end: n,
                                duration: 3,
                                separator: ","
                            }))))))
                        }
                    }]), a
                }(n.Component),
                re = a(47),
                oe = a.n(re),
                ce = function(e) {
                    Object(h.a)(a, e);
                    var t = Object(d.a)(a);

                    function a() {
                        var e;
                        Object(u.a)(this, a);
                        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(r))).state = {
                            countries: [{
                                country: ""
                            }],
                            totalActiveCases: 0,
                            totalCriticalCases: 0
                        }, e.totalWorldStat = function() {
                            var t = 0,
                                a = 0,
                                n = 0;
                            if ("WORLD" !== Object(G.a)(e.state.countries)[0].country)
                                for (; t <= e.state.countries.length - 1;) a += e.state.countries[t].active, n += e.state.countries[t].critical, t++;
                            else a += e.state.countries[0].active, n += e.state.countries[0].critical;
                            e.setState({
                                totalActiveCases: a,
                                totalCriticalCases: n
                            })
                        }, e
                    }
                    return Object(m.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(i.a)(l.a.mark((function e() {
                                var t, a;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, k.a.get("https://corona.lmao.ninja/v2/countries");
                                        case 2:
                                            t = e.sent, a = t.data, this.setState({
                                                countries: a
                                            }), this.totalWorldStat();
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.totalActiveCases,
                                a = e.totalCriticalCases,
                                n = t - a;
                            parseInt(100 - a / t * 100);
                            return r.a.createElement("div", {
                                className: oe.a.container
                            }, r.a.createElement(f.a, {
                                container: !0,
                                spacing: 13,
                                justify: "center"
                            }, r.a.createElement(f.a, {
                                item: !0,
                                component: p.a,
                                xs: 12,
                                md: 3,
                                className: x()(oe.a.card, oe.a.deaths)
                            }, r.a.createElement(v.a, null, r.a.createElement(y.a, {
                                style: {
                                    fontSize: 25,
                                    marginBottom: 6,
                                    fontWeight: "bold",
                                    whiteSpace: "nowrap"
                                },
                                color: "textSecondry",
                                gutterBottom: !0
                            }, "ACTIVE CASES:"), r.a.createElement(y.a, {
                                style: {
                                    fontSize: 25,
                                    marginBottom: 6,
                                    whiteSpace: "nowrap"
                                },
                                color: "textSecondry",
                                gutterBottom: !0
                            }, "Currently Infected Patients:"), r.a.createElement(y.a, {
                                style: {
                                    fontSize: 20,
                                    marginBottom: 6,
                                    color: "blue"
                                }
                            }, r.a.createElement(E.a, {
                                start: 0,
                                end: t,
                                duration: 3,
                                separator: ","
                            })), r.a.createElement(y.a, {
                                style: {
                                    fontSize: 25,
                                    marginBottom: 6,
                                    whiteSpace: "nowrap"
                                },
                                color: "textSecondry",
                                gutterBottom: !0
                            }, "In Mild Condition:"), r.a.createElement(y.a, {
                                style: {
                                    fontSize: 20,
                                    marginBottom: 6,
                                    color: "red"
                                }
                            }, r.a.createElement(E.a, {
                                start: 0,
                                end: n,
                                duration: 3,
                                separator: ","
                            })), r.a.createElement(y.a, {
                                style: {
                                    fontSize: 25,
                                    marginBottom: 6,
                                    whiteSpace: "nowrap"
                                },
                                color: "textSecondry",
                                gutterBottom: !0
                            }, "Serious or Critical:"), r.a.createElement(y.a, {
                                style: {
                                    fontSize: 20,
                                    marginBottom: 6,
                                    color: "green"
                                }
                            }, r.a.createElement(E.a, {
                                start: 0,
                                end: a,
                                duration: 3,
                                separator: ","
                            }))))))
                        }
                    }]), a
                }(n.Component),
                se = a(48),
                le = a.n(se),
                ie = function(e) {
                    Object(h.a)(a, e);
                    var t = Object(d.a)(a);

                    function a() {
                        var e;
                        Object(u.a)(this, a);
                        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(r))).state = {
                            countries: [{
                                country: ""
                            }],
                            totalDeaths: 0,
                            totalRecoverd: 0
                        }, e.totalWorldStat = function() {
                            var t = 0,
                                a = 0,
                                n = 0;
                            if ("WORLD" !== Object(G.a)(e.state.countries)[0].country)
                                for (; t <= e.state.countries.length - 1;) a += e.state.countries[t].deaths, n += e.state.countries[t].recovered, t++;
                            else a += e.state.countries[0].deaths, n += e.state.countries[0].recovered;
                            e.setState({
                                totalDeaths: a,
                                totalRecoverd: n
                            })
                        }, e
                    }
                    return Object(m.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(i.a)(l.a.mark((function e() {
                                var t, a;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, k.a.get("https://corona.lmao.ninja/v2/countries");
                                        case 2:
                                            t = e.sent, a = t.data, this.setState({
                                                countries: a
                                            }), this.totalWorldStat();
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.totalDeaths,
                                a = e.totalRecoverd,
                                n = t + a;
                            parseInt(100 - t / n * 100);
                            return r.a.createElement("div", {
                                className: le.a.container
                            }, r.a.createElement(f.a, {
                                container: !0,
                                spacing: 13,
                                justify: "center"
                            }, r.a.createElement(f.a, {
                                item: !0,
                                component: p.a,
                                xs: 12,
                                md: 3,
                                className: x()(le.a.card, le.a.deaths)
                            }, r.a.createElement(v.a, null, r.a.createElement(y.a, {
                                style: {
                                    fontSize: 25,
                                    marginBottom: 6,
                                    fontWeight: "bold",
                                    whiteSpace: "nowrap"
                                },
                                color: "textSecondry",
                                gutterBottom: !0
                            }, "CLOSED CASES:"), r.a.createElement(y.a, {
                                style: {
                                    fontSize: 25,
                                    marginBottom: 6,
                                    whiteSpace: "nowrap"
                                },
                                color: "textSecondry",
                                gutterBottom: !0
                            }, "Cases which had an outcome:"), r.a.createElement(y.a, {
                                style: {
                                    fontSize: 20,
                                    marginBottom: 6,
                                    color: "blue"
                                }
                            }, r.a.createElement(E.a, {
                                start: 0,
                                end: n,
                                duration: 3,
                                separator: ","
                            })), r.a.createElement(y.a, {
                                style: {
                                    fontSize: 25,
                                    marginBottom: 6,
                                    whiteSpace: "nowrap"
                                },
                                color: "textSecondry",
                                gutterBottom: !0
                            }, "Recovered / Discharged:"), r.a.createElement(y.a, {
                                style: {
                                    fontSize: 20,
                                    marginBottom: 6,
                                    color: "red"
                                }
                            }, r.a.createElement(E.a, {
                                start: 0,
                                end: a,
                                duration: 3,
                                separator: ","
                            })), r.a.createElement(y.a, {
                                style: {
                                    fontSize: 25,
                                    marginBottom: 6,
                                    whiteSpace: "nowrap"
                                },
                                color: "textSecondry",
                                gutterBottom: !0
                            }, "Deaths:"), r.a.createElement(y.a, {
                                style: {
                                    fontSize: 20,
                                    marginBottom: 6,
                                    color: "green"
                                }
                            }, r.a.createElement(E.a, {
                                start: 0,
                                end: t,
                                duration: 3,
                                separator: ","
                            }))))))
                        }
                    }]), a
                }(n.Component);
            c.a.render(r.a.createElement(ne, null), document.getElementById("totalState")), c.a.render(r.a.createElement(ce, null), document.getElementById("activeState")), c.a.render(r.a.createElement(ie, null), document.getElementById("closedState")), c.a.render(r.a.createElement(ee, null), document.getElementById("stateTable")), c.a.render(r.a.createElement(V, null), document.getElementById("graphCards")),
                function() {
                    if ("serviceWorker" in navigator) {
                        if (new URL("", window.location).origin !== window.location.origin) return;
                        window.addEventListener("load", (function() {
                            var e = "".concat("", "/service-worker.js");
                            J ? (! function(e) {
                                fetch(e).then((function(t) {
                                    404 === t.status || -1 === t.headers.get("content-type").indexOf("javascript") ? navigator.serviceWorker.ready.then((function(e) {
                                        e.unregister().then((function() {
                                            window.location.reload()
                                        }))
                                    })) : U(e)
                                })).catch((function() {
                                    console.log("No internet connection found. App is running in offline mode.")
                                }))
                            }(e), navigator.serviceWorker.ready.then((function() {
                                console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")
                            }))) : U(e)
                        }))
                    }
                }()
        },
        46: function(e, t, a) {
            e.exports = {
                container: "totalState_container__I0gSf",
                card: "totalState_card__3g-SA",
                deaths: "totalState_deaths__1ONFQ"
            }
        },
        47: function(e, t, a) {
            e.exports = {
                container: "activeState_container__3QsBJ",
                card: "activeState_card__BJDSf",
                deaths: "activeState_deaths__1QOrL"
            }
        },
        48: function(e, t, a) {
            e.exports = {
                container: "closeState_container__1ExOQ",
                card: "closeState_card__fneQG",
                deaths: "closeState_deaths__12Tua"
            }
        },
        89: function(e, t, a) {},
        95: function(e, t, a) {
            e.exports = {
                container: "Chart_container__2xQeL"
            }
        },
        96: function(e, t, a) {
            e.exports = {
                formControl: "CountreyPicker_formControl__2jhsw"
            }
        },
        97: function(e, t, a) {
            e.exports = {
                container: "App_container__hqY9m",
                image: "App_image__24X5J"
            }
        }
    },
    [
        [100, 1, 2]
    ]
]);
//# sourceMappingURL=main.a3de516d.chunk.js.map