/*

 * BrazilDotMap
   Componente que renderiza mapa agrupado por região
 
 * Uso:
  new BrazilDotMap({
    mount: "#app",
    width: 700,
    height: 700,
     onRegionClick: (region) => {}
      });
 */

export default class BrazilDotMap {
  static REGIONS = {
    norte: {
      label: "Norte",
      color: { r: 34, g: 197, b: 94 },
      hoverColor: { r: 74, g: 222, b: 128 },
    },
    nordeste: {
      label: "Nordeste",
      color: { r: 251, g: 146, b: 60 },
      hoverColor: { r: 253, g: 186, b: 116 },
    },
    "centro-oeste": {
      label: "Centro-Oeste",
      color: { r: 167, g: 139, b: 250 },
      hoverColor: { r: 196, g: 181, b: 253 },
    },
    sudeste: {
      label: "Sudeste",
      color: { r: 251, g: 191, b: 36 },
      hoverColor: { r: 253, g: 224, b: 71 },
    },
    sul: {
      label: "Sul",
      color: { r: 96, g: 165, b: 250 },
      hoverColor: { r: 147, g: 197, b: 253 },
    },
  };

  // ─── Bordas dos polígonos de cada região ─────────────────────────────────────────────
  // Ajustar aqui reflete nas regiões automaticamente.
  // Para alterar pontos com fronteiras, é necessário atualizar o mesmo ponto nas regiões.

  static REGION_POLYGONS = {
    norte: [
      [0.3077, 0.0076],
      [0.3297, 0.0101],
      [0.3516, 0.0127],
      [0.3736, 0.0076],
      [0.3846, 0.038],
      [0.4176, 0.0405],
      [0.4396, 0.038],
      [0.4615, 0.0456],
      [0.4835, 0.0329],
      [0.4945, 0.0253],
      [0.5055, 0.0354],
      [0.5165, 0.0937],
      [0.5275, 0.1013],
      [0.5385, 0.1266],
      [0.5604, 0.1519],
      [0.5824, 0.157],
      [0.6374, 0.1646],
      [0.6593, 0.2025],
      [0.6813, 0.2101],
      [0.6093, 0.2911],
      [0.6154, 0.5018],
      [0.5414, 0.4724],
      [0.5275, 0.4177],
      [0.4835, 0.4177],
      [0.4396, 0.413],
      [0.3956, 0.413],
      [0.3516, 0.3777],
      [0.3377, 0.413],
      [0.2837, 0.4877],
      [0.2218, 0.4624],
      [0.1998, 0.4371],
      [0.1978, 0.3924],
      [0.1758, 0.3924],
      [0.1538, 0.3924],
      [0.1319, 0.4224],
      [0.0879, 0.4177],
      [0.0769, 0.4051],
      [0.0659, 0.3924],
      [0.044, 0.3924],
      [0.011, 0.3924],
      [0.0044, 0.3671],
      [0.011, 0.3418],
      [0.0, 0.2911],
      [0.011, 0.2405],
      [0.033, 0.1899],
      [0.0769, 0.1899],
      [0.0879, 0.1772],
      [0.0989, 0.1646],
      [0.0989, 0.1266],
      [0.1319, 0.1139],
      [0.1429, 0.0886],
      [0.1538, 0.0759],
      [0.1648, 0.1013],
      [0.1868, 0.1139],
      [0.2198, 0.1013],
      [0.2418, 0.0886],
      [0.2637, 0.0759],
      [0.2747, 0.0633],
      [0.2857, 0.038],
      [0.2967, 0.0127],
    ],

    nordeste: [
      [0.6813, 0.2101],
      [0.7363, 0.2101],
      [0.7802, 0.2329],
      [0.8571, 0.2658],
      [0.8571, 0.3418],
      [0.8527, 0.3671],
      [0.8242, 0.4177],
      [0.8022, 0.4684],
      [0.7802, 0.4937],
      [0.7692, 0.5316],
      [0.7582, 0.5696],
      [0.7473, 0.6203],
      [0.7033, 0.5949],
      [0.7293, 0.559],
      [0.6074, 0.5284],
      [0.6154, 0.3924],
      [0.6154, 0.5018],
      [0.6093, 0.2911],
      [0.6813, 0.2101],
    ],

    "centro-oeste": [
      [0.5414, 0.4724],
      [0.5275, 0.4177],
      [0.4835, 0.4177],
      [0.4396, 0.413],
      [0.3956, 0.413],
      [0.3516, 0.3777],
      [0.3077, 0.413],
      [0.2937, 0.4477],
      [0.3018, 0.4424],
      [0.2967, 0.519],
      [0.3033, 0.4937],
      [0.2967, 0.4684],
      [0.2967, 0.443],
      [0.3077, 0.5443],
      [0.3297, 0.5696],
      [0.3516, 0.5949],
      [0.3516, 0.6329],
      [0.3626, 0.6582],
      [0.3846, 0.6709],
      [0.4176, 0.6962],
      [0.4286, 0.7089],
      [0.4596, 0.7135],
      [0.4835, 0.6456],
      [0.5575, 0.5949],
      [0.5714, 0.5443],
      [0.5934, 0.519],
      [0.6154, 0.4937],
      [0.6154, 0.3924],
      [0.5414, 0.4724],
    ],

    sudeste: [
      [0.7473, 0.6203],
      [0.7363, 0.6582],
      [0.7297, 0.6835],
      [0.7253, 0.7089],
      [0.6813, 0.7215],
      [0.6484, 0.7291],
      [0.6264, 0.7418],
      [0.5934, 0.7595],
      [0.5604, 0.7975],
      [0.556, 0.8101],
      [0.5275, 0.7975],
      [0.5055, 0.7468],
      [0.4835, 0.7089],
      [0.4725, 0.7009],
      [0.4286, 0.7089],
      [0.4176, 0.6962],
      [0.3846, 0.6709],
      [0.4835, 0.6456],
      [0.5575, 0.5949],
      [0.5714, 0.5443],
      [0.5934, 0.519],
      [0.6154, 0.4937],
      [0.6074, 0.5284],
      [0.7293, 0.559],
      [0.7033, 0.5949],
      [0.7473, 0.6203],
    ],

    sul: [
      [0.576, 0.8101],
      [0.5582, 0.8481],
      [0.5495, 0.8734],
      [0.5385, 0.8861],
      [0.5275, 0.8987],
      [0.5055, 0.9241],
      [0.4945, 0.9494],
      [0.4725, 0.9747],
      [0.4505, 0.9873],
      [0.444, 0.9924],
      [0.4286, 0.9873],
      [0.4066, 0.9747],
      [0.3736, 0.9494],
      [0.3516, 0.9241],
      [0.3407, 0.8861],
      [0.3516, 0.8481],
      [0.3626, 0.8228],
      [0.3736, 0.7975],
      [0.3846, 0.7722],
      [0.4066, 0.7468],
      [0.4176, 0.7342],
      [0.4286, 0.7089],
      [0.4725, 0.7009],
      [0.4835, 0.7089],
      [0.5055, 0.7468],
      [0.5275, 0.7975],
      [0.556, 0.8101],
    ],
  };

  static CENTROIDS = {
    norte: [0.33, 0.26],
    nordeste: [0.72, 0.41],
    "centro-oeste": [0.43, 0.54],
    sudeste: [0.62, 0.62],
    sul: [0.47, 0.84],
  };

  constructor({ mount = "body", width = 700, height = 700, onRegionClick } = {}) {
    this.width = width;
    this.height = height;
    this.onRegionClick = onRegionClick || null;
    this.hoveredRegion = null;
    this.dots = [];
    this.animFrame = null;
    this.transitionProgress = {};
    this.lastTimestamp = 0;

    for (const key of Object.keys(BrazilDotMap.REGIONS)) {
      this.transitionProgress[key] = 0;
    }

    this._mount(mount);
    this.generateDots();
    this._bindEvents();
    this._startLoop();
  }

  _mount(selector) {
    const container = typeof selector === "string" ? document.querySelector(selector) : selector;
    if (!container) throw new Error(`BrazilDotMap: mount target "${selector}" not found.`);

    this.canvas = document.createElement("canvas");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.style.cssText = [
      "display:block",
      "border-radius:12px",
      "background:rgb(86, 116, 248)",
    ].join(";");

    this.tooltip = document.createElement("div");
    this.tooltip.style.cssText = [
      "position:absolute",
      "pointer-events:none",
      "background:rgba(10,15,26,0.92)",
      "color:#e2e8f0",
      "font-size:13px",
      "font-weight:600",
      "letter-spacing:0.06em",
      "text-transform:uppercase",
      "padding:7px 14px",
      "border-radius:6px",
      "border:1px solid rgba(255,255,255,0.13)",
      "backdrop-filter:blur(8px)",
      "opacity:0",
      "transition:opacity 0.15s ease",
      "white-space:nowrap",
      "z-index:100",
    ].join(";");

    const wrapper = document.createElement("div");
    wrapper.style.cssText = "position:relative;display:inline-block;";
    wrapper.appendChild(this.canvas);
    wrapper.appendChild(this.tooltip);
    container.appendChild(wrapper);

    this.ctx = this.canvas.getContext("2d");
    this.wrapper = wrapper;
  }

  generateDots() {
    const STEP = 10;
    const RADIUS = 3.0;
    const PAD = 14;

    this.dots = [];
    this.dotRadius = RADIUS;

    const cols = Math.floor((this.width - PAD * 2) / STEP);
    const rows = Math.floor((this.height - PAD * 2) / STEP);

    for (let row = 0; row < rows; row++) {
      const hexOffset = (row % 2) * STEP * 0.5;
      for (let col = 0; col < cols; col++) {
        const px = PAD + col * STEP + hexOffset;
        const py = PAD + row * STEP;
        const nx = px / this.width;
        const ny = py / this.height;

        // Usar estritamente os pontos do polígono para mapear
        const region = this.getRegion(nx, ny);
        if (!region) continue;

        this.dots.push({ x: px, y: py, nx, ny, region });
      }
    }
  }

  getRegion(nx, ny) {
    for (const [name, poly] of Object.entries(BrazilDotMap.REGION_POLYGONS)) {
      if (this._pointInPolygon(nx, ny, poly)) return name;
    }
    return null;
  }

  _pointInPolygon(x, y, polygon) {
    let inside = false;
    const n = polygon.length;
    for (let i = 0, j = n - 1; i < n; j = i++) {
      const [xi, yi] = polygon[i];
      const [xj, yj] = polygon[j];
      if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
        inside = !inside;
      }
    }
    return inside;
  }

  _bindEvents() {
    this.canvas.addEventListener("mousemove", (e) => this.handleMouseMove(e));
    this.canvas.addEventListener("mouseleave", () => {
      this.hoveredRegion = null;
      this.tooltip.style.opacity = "0";
      this.canvas.style.cursor = "default";
    });
    this.canvas.addEventListener("click", (e) => this.handleClick(e));
  }

  handleMouseMove(e) {
    const rect = this.canvas.getBoundingClientRect();
    const mx = (e.clientX - rect.left) * (this.width / rect.width);
    const my = (e.clientY - rect.top) * (this.height / rect.height);
    const nx = mx / this.width;
    const ny = my / this.height;

    // Hover
    const region = this.getRegion(nx, ny);
    this.hoveredRegion = region;

    if (region) {
      this.canvas.style.cursor = "pointer";
      this.tooltip.textContent = BrazilDotMap.REGIONS[region].label;
      this.tooltip.style.opacity = "1";
      const wRect = this.wrapper.getBoundingClientRect();
      this.tooltip.style.left = e.clientX - wRect.left + 16 + "px";
      this.tooltip.style.top = e.clientY - wRect.top - 12 + "px";
    } else {
      this.canvas.style.cursor = "default";
      this.tooltip.style.opacity = "0";
    }
  }

  handleClick(e) {
    if (!this.hoveredRegion) return;
    const region = this.hoveredRegion;
    if (this.onRegionClick) {
      this.onRegionClick(region);
    } else {
      window.location.href = `/pages/${region}.html`;
    }
  }

  // Loop de animação

  _startLoop() {
    const loop = (ts) => {
      const dt = Math.min((ts - this.lastTimestamp) / 1000, 0.05);
      this.lastTimestamp = ts;
      this._updateTransitions(dt);
      this.render();
      this.animFrame = requestAnimationFrame(loop);
    };
    this.animFrame = requestAnimationFrame(loop);
  }

  _updateTransitions(dt) {
    const SPEED = 7;
    for (const key of Object.keys(BrazilDotMap.REGIONS)) {
      const target = key === this.hoveredRegion ? 1 : 0;
      const current = this.transitionProgress[key];
      this.transitionProgress[key] = Math.min(
        1,
        Math.max(0, current + (target - current) * SPEED * dt)
      );
    }
  }

  render() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    ctx.fillStyle = "rgb(86, 116, 248)";
    ctx.fillRect(0, 0, this.width, this.height);

    // this._drawDebug(ctx);

    if (this.hoveredRegion) {
      this._drawRegionGlow(ctx, this.hoveredRegion);
    }

    for (const dot of this.dots) {
      this._drawDot(ctx, dot, this.transitionProgress[dot.region] || 0);
    }
  }

  //   _drawDebug(ctx) {
  //     const colors = {
  //       norte:          "rgba(34,197,94,0.25)",
  //       nordeste:       "rgba(251,146,60,0.25)",
  //       "centro-oeste": "rgba(167,139,250,0.25)",
  //       sudeste:        "rgba(251,191,36,0.25)",
  //       sul:            "rgba(96,165,250,0.25)",
  //     };

  //     for (const [name, poly] of Object.entries(BrazilDotMap.REGION_POLYGONS)) {
  //       ctx.beginPath();
  //       ctx.moveTo(poly[0][0] * this.width, poly[0][1] * this.height);
  //       for (let i = 1; i < poly.length; i++) {
  //         ctx.lineTo(poly[i][0] * this.width, poly[i][1] * this.height);
  //       }
  //       ctx.closePath();

  //       ctx.fillStyle = colors[name];
  //       ctx.fill();

  //       ctx.strokeStyle = "rgba(255,255,255,0.7)";
  //       ctx.lineWidth = 1.5;
  //       ctx.stroke();

  //       const [cx, cy] = BrazilDotMap.CENTROIDS[name];
  //       ctx.fillStyle = "white";
  //       ctx.font = "bold 13px monospace";
  //       ctx.textAlign = "center";
  //       ctx.fillText(name, cx * this.width, cy * this.height);

  //       poly.forEach(([nx, ny], i) => {
  //         const px = nx * this.width;
  //         const py = ny * this.height;
  //         ctx.beginPath();
  //         ctx.arc(px, py, 4, 0, Math.PI * 2);
  //         ctx.fillStyle = "yellow";
  //         ctx.fill();
  //         ctx.fillStyle = "black";
  //         ctx.font = "10px monospace";
  //         ctx.textAlign = "left";
  //         ctx.fillText(i, px + 5, py + 4);
  //       });
  //     }
  //   }

  _drawDot(ctx, dot, t) {
    const BASE = { r: 75, g: 85, b: 99 };
    const { hoverColor } = BrazilDotMap.REGIONS[dot.region];

    const r = Math.round(BASE.r + (hoverColor.r - BASE.r) * t);
    const g = Math.round(BASE.g + (hoverColor.g - BASE.g) * t);
    const b = Math.round(BASE.b + (hoverColor.b - BASE.b) * t);
    const a = 0.5 + t * 0.5;
    const radius = this.dotRadius * (1 + t * 0.5);

    if (t > 0.04) {
      ctx.save();
      ctx.shadowColor = `rgba(${r},${g},${b},${t * 0.65})`;
      ctx.shadowBlur = 7 * t;
    }

    ctx.beginPath();
    ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
    ctx.fill();

    if (t > 0.04) ctx.restore();
  }

  _drawRegionGlow(ctx, region) {
    const [nx, ny] = BrazilDotMap.CENTROIDS[region];
    const cx = nx * this.width;
    const cy = ny * this.height;
    const { r, g, b } = BrazilDotMap.REGIONS[region].color;
    const t = this.transitionProgress[region];

    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 180);
    grad.addColorStop(0, `rgba(${r},${g},${b},${0.09 * t})`);
    grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, this.width, this.height);
  }

  // Cleanup

  destroy() {
    if (this.animFrame) cancelAnimationFrame(this.animFrame);
    this.canvas.remove();
    this.tooltip.remove();
    this.wrapper.remove();
  }
}
