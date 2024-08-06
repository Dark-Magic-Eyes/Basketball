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
      <div>
        <button onClick={handleClickLoadButton} className="bg-white text-black">Change Assets</button>
      </div>
      <div className="flex h-full">
        <Unity
          unityProvider={unityProvider}
          style={{ width: 430, height: 932 }}
        />
      </div>
    </main>
  );
}
