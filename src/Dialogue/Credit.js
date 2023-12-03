import React, { Suspense } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";

import forestPath from '../assets/forest/forest.jpg';
import World from '../Geometry/World';


export default function Credit () {
    return (
        <>
            <div className="credits-container">
                <h1>Mindfulness Alchemy</h1>
                <section>
                    <h2>Resource Credits</h2>
                    <ul>
                        <li>
                            <a href="https://www.vecteezy.com/free-png/poison">Poison PNGs by Vecteezy</a>
                        </li>
                        <li>
                            <a href="https://lovepik.com/images/png-galaxy-effect.html">Galaxy Effect Png vectors by Lovepik.com</a>
                        </li>
                        <li>
                            <a href="https://lovepik.com/images/png-galaxy-effect.html">Galaxy Effect Png vectors by Lovepik.com</a>
                        </li>
                        <li>
                            <a href="https://www.freepik.com/free-vector/vintage-fritillary-flower-pattern_14728043.htm#query=Persian%20carpet&position=1&from_view=search&track=ais&uuid=2301de49-67d8-4797-af3b-71488199ff4e">Image by rawpixel.com</a> on Freepik
                        </li>
                        <li>
                        “Late Flowering Evening Primrose” by  FreeVintageIllustrations.com
                        </li>
                        <li>
                        “rose pink flower vintage illustration” by FreeVintageIllustrations.com
                        </li>
                        <li>
                        “Camomile PNG image” by Pngimg.com
                        </li>
                        <li>
                        "LittleGriffons hollandicus01" (https://skfb.ly/oKUOO) by OkameMiko is licensed under Creative Commons Attribution-NonCommercial (http://creativecommons.org/licenses/by-nc/4.0/).
                        </li>
                        <li>
                        "Inside Galaxy Skybox HDRI 360 panorama" (https://skfb.ly/oKvV8) by Aliaksandr.melas is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
                        </li>
                        <li>
                        "Stylized Plant Pack" (https://skfb.ly/oBWK8) by Marbles studio is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
                        </li>
                        <li>
                        "Wooden Table" (https://skfb.ly/o8QGC) by Helyeouka is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
                        </li>
                        <li>
                            "Potion Poison Elixir (game ready asset)" (https://skfb.ly/oNnWA) by Pixel Life is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
                        </li>
                        <li>
                        "Potion Health Elixir (game ready asset)" (https://skfb.ly/oMQtU) by Pixel Life is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
                        </li>
                        <li>
                        "Potion Stamina Elixir (game ready asset)" (https://skfb.ly/oNqSB) by Pixel Life is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
                        </li>
                    </ul>
                </section>
            </div>
            <Canvas
            camera={{ fov: 75, position: [8, 6, 8]}}
            shadows>
                <Suspense fallback={null}>
                    <directionalLight
                        intensity={0.1}
                        castShadow={true}
                        shadow-bias={-0.0002}
                        shadow-mapSize={[32, 32]}
                    />
                    <ambientLight />
                    <World texturePath={forestPath}/>
                    <OrbitControls maxDistance={10} autoRotate autoRotateSpeed={0.5}/>
                </Suspense>
            </Canvas>
        </>

    );
};