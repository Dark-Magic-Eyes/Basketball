"use client";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Home() {
  const { unityProvider, sendMessage, loadingProgression } = useUnityContext({
    loaderUrl: "Build/Basketball.loader.js",
    dataUrl: "Build/Basketball.data",
    frameworkUrl: "Build/Basketball.framework.js",
    codeUrl: "Build/Basketball.wasm",
    streamingAssetsUrl: "StreamingAssets",
  });
  const handleClickLoadButton = () => {
    sendMessage("AssetManager", "LoadAssetPreview");
  };
  return (
    <main className="flex min-h-screen justify-center items-center mx-6 gap-10">
      <div className="flex items-center justify-center w-[430px] h-[100vh]">
        <p className="absolute z-[-1]">Loading Application... {Math.round(loadingProgression * 100)}%</p>
        <Unity
          unityProvider={unityProvider}
          style={{ maxWidth: 430, height: "inherit" }}
        />
      </div>
    </main>
  );
}
