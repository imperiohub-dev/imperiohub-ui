import { useEffect, useState } from "react";

/* ---------- Types ---------- */
type DeviceType = "phone" | "tablet" | "pc" | "tv" | "unknown";
type OrientationType = "portrait" | "landscape";

interface DeviceState {
  width: number;
  height: number;
  device: DeviceType;
  orientation: OrientationType;
}

/* ---------- Helpers ---------- */
function getDeviceType(width: number): DeviceType {
  if (width <= 480) return "phone";
  if (width >= 481 && width <= 1024) return "tablet";
  if (width >= 1025 && width <= 1600) return "pc";
  if (width >= 1601) return "tv";
  return "unknown";
}

function getOrientation(): OrientationType {
  if (typeof window === "undefined") return "portrait";

  // API moderna
  const o = window.screen.orientation?.type || "";
  if (o.includes("portrait")) return "portrait";
  if (o.includes("landscape")) return "landscape";

  // Fallback por media query
  return window.matchMedia("(orientation: portrait)").matches
    ? "portrait"
    : "landscape";
}

/* ---------- Hook principal ---------- */
export default function useDevice() {
  const hasWindow = typeof window !== "undefined";

  const [state, setState] = useState<DeviceState>(() => {
    const width = hasWindow ? window.innerWidth : 1024;
    const height = hasWindow ? window.innerHeight : 768;
    return {
      width,
      height,
      device: getDeviceType(width),
      orientation: getOrientation(),
    };
  });

  useEffect(() => {
    if (!hasWindow) return;

    let rafId: number | null = null;

    const update = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setState({
        width,
        height,
        device: getDeviceType(width),
        orientation: getOrientation(),
      });
    };

    const onChange = () => {
      // evita spam de eventos usando rAF
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    // resize cubre la mayoría de rotaciones
    window.addEventListener("resize", onChange);
    // soporte explícito de orientación
    window.addEventListener("orientationchange", onChange);

    // también escuchar media query por robustez
    const mql = window.matchMedia("(orientation: portrait)");
    mql.addEventListener?.("change", onChange);

    // primera sincronización
    update();

    return () => {
      window.removeEventListener("resize", onChange);
      window.removeEventListener("orientationchange", onChange);
      mql.removeEventListener?.("change", onChange);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [hasWindow]);

  const { width, height, device, orientation } = state;

  return {
    width,
    height,
    device, // "phone" | "tablet" | "pc" | "tv"
    orientation, // "portrait" | "landscape"
    isPhone: device === "phone",
    isTablet: device === "tablet",
    isPc: device === "pc",
    isTv: device === "tv",
    isPortrait: orientation === "portrait",
    isLandscape: orientation === "landscape",
  };
}
