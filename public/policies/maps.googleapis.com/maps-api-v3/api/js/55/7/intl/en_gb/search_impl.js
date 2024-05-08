google.maps.__gjsload__('search_impl', function(_) {
    var ohb = function(a, b) {
            _.H(a.Lg, 3, b)
        },
        shb = function(a, b, c) {
            const d = _.VL(new phb);
            c.uq = (0, _.Ca)(d.load, d);
            c.clickable = 0 != a.get("clickable");
            _.rKa(c, _.oS(b));
            const e = [];
            e.push(_.ok(c, "click", (0, _.Ca)(qhb, null, a)));
            _.Tb(["mouseover", "mouseout", "mousemove"], function(f) {
                e.push(_.ok(c, f, (0, _.Ca)(rhb, null, a, f)))
            });
            e.push(_.ok(a, "clickable_changed", function() {
                a.Ig.clickable = 0 != a.get("clickable")
            }));
            a.Jg = e
        },
        qhb = function(a, b, c, d, e) {
            let f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, 0 == e.getStatus())) {
                f.location = _.Y(e.Lg,
                    2) ? new _.Lj(_.xu(_.J(e.Lg, 2, _.Du).Lg, 1), _.xu(_.J(e.Lg, 2, _.Du).Lg, 2)) : null;
                f.fields = {};
                const g = _.wi(e.Lg, 3);
                for (let h = 0; h < g; ++h) {
                    const l = _.$r(e.Lg, 3, _.xS, h);
                    f.fields[l.getKey()] = l.getValue()
                }
            }
            _.Bk(a, "click", b, c, d, f)
        },
        rhb = function(a, b, c, d, e, f, g) {
            let h = null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.Bk(a, b, c, d, e, h, g)
        },
        thb = function() {},
        uhb = class extends _.R {
            constructor() {
                super()
            }
            Wi() {
                return _.Pi(this.Lg, 2)
            }
        },
        vhb = [_.K, , , _.iq, _.yLa];
    var whb = class extends _.R {
        constructor(a) {
            super(a)
        }
        getStatus() {
            return _.I(this.Lg, 1, -1)
        }
    };
    var phb = class {
        constructor() {
            var a = _.No,
                b = _.Ko;
            this.Jg = _.Ri;
            this.Ig = _.Ur(_.Iz, a, _.RB + "/maps/api/js/LayersService.GetFeature", b)
        }
        load(a, b) {
            function c(g) {
                g = new whb(g);
                b(g)
            }
            var d = new uhb;
            _.H(d.Lg, 1, a.layerId.split("|")[0]);
            _.H(d.Lg, 2, a.featureId);
            ohb(d, this.Jg.Ig().Ig());
            for (var e in a.parameters) {
                var f = _.Li(d.Lg, 4, _.xS);
                _.H(f.Lg, 1, e);
                _.H(f.Lg, 2, a.parameters[e])
            }
            a = _.Di(d.zi(), vhb, 1);
            this.Ig(a, c, c);
            return a
        }
        cancel() {
            throw Error("Not implemented");
        }
    };
    thb.prototype.MD = function(a) {
        if (_.mn[15]) {
            var b = a.Mg;
            const c = a.Mg = a.getMap();
            b && a.Ig && (a.Kg ? (b = b.__gm.Kg, b.set(b.get().vn(a.Ig))) : a.Ig && _.OKa(a.Ig, b) && (_.Tb(a.Jg || [], _.qk), a.Jg = null));
            if (c) {
                b = new _.zy;
                const d = a.get("layerId").split("|");
                b.layerId = d[0];
                for (let e = 1; e < d.length; ++e) {
                    const [f, ...g] = d[e].split(":");
                    b.parameters[f] = g.join(":")
                }
                a.get("spotlightDescription") && (b.spotlightDescription = new _.Yy(a.get("spotlightDescription")));
                a.get("paintExperimentIds") && (b.paintExperimentIds = a.get("paintExperimentIds").slice(0));
                a.get("styler") && (b.styler = new _.Ny(a.get("styler")));
                a.get("roadmapStyler") && (b.roadmapStyler = new _.Ny(a.get("roadmapStyler")));
                a.get("travelMapRequest") && (b.travelMapRequest = new _.Pga(a.get("travelMapRequest")));
                a.get("mapsApiLayer") && (b.mapsApiLayer = new _.Fy(a.get("mapsApiLayer")));
                a.get("mapFeatures") && (b.mapFeatures = a.get("mapFeatures"));
                a.get("clickableCities") && (b.clickableCities = a.get("clickableCities"));
                a.get("searchPipeMetadata") && (b.searchPipeMetadata = new _.jB(a.get("searchPipeMetadata")));
                a.get("overlayLayer") && (b.overlayLayer = new _.Zy(a.get("overlayLayer")));
                a.get("caseExperimentIds") && (b.caseExperimentIds = a.get("caseExperimentIds").slice(0));
                a.get("boostMapExperimentIds") && (b.boostMapExperimentIds = a.get("boostMapExperimentIds").slice(0));
                a.get("airQualityPipeMetadata") && (b.airQualityPipeMetadata = new _.xC(a.get("airQualityPipeMetadata")));
                a.get("directionsPipeParameters") && (b.directionsPipeParameters = new _.wC(a.get("directionsPipeParameters")));
                a.get("clientSignalPipeMetadata") &&
                    (b.clientSignalPipeMetadata = new _.PA(a.get("clientSignalPipeMetadata")));
                b.darkLaunch = !!a.get("darkLaunch");
                a.Ig = b;
                a.Kg = a.get("renderOnBaseMap");
                a.Kg ? (a = c.__gm.Kg, a.set(a.get().El(b))) : shb(a, c, b);
                _.wl(c, "Lg");
                _.ul(c, 148282)
            }
        }
    };
    _.gk("search_impl", new thb);
});