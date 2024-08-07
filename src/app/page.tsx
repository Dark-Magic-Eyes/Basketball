"use client";
import { useCallback, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Home() {
  const { unityProvider, sendMessage, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "Build/Basketball.loader.js",
    dataUrl: "Build/Basketball.data",
    frameworkUrl: "Build/Basketball.framework.js",
    codeUrl: "Build/Basketball.wasm",
    streamingAssetsUrl: "StreamingAssets",
  });
  const handleClickLoadButton = useCallback(() => {
    sendMessage("AssetManager", "LoadAssetPreview", "https://66b18a7b1ca8ad33d4f45f7d.mockapi.io/game/api/background/1");
  }, [isLoaded]);
  useEffect(()=>{
    window.addEventListener("message", (event)=>{
      console.log(event);
      handleClickLoadButton();
    })
    return ()=>{
      window.removeEventListener("message", handleClickLoadButton);
    }
  }, [handleClickLoadButton])


  return (
    <main className="flex min-h-screen justify-center items-center gap-10">
      <div className="flex mx-auto items-center justify-center w-[100vw] h-[100vh] drop-shadow-glow">
        {!isLoaded && <p className="absolute z-[-1]">Loading Application... {Math.round(loadingProgression * 100)}%</p>}
        <Unity
          unityProvider={unityProvider}
          style={{ aspectRatio: 0.4613733906, maxWidth: 430, width: "inherit"}}
        />
      </div>
    </main>
  );
}
