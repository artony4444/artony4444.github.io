// card container
let cc = document.getElementById("projectsContainer");

let card = (icon, title, desc, lang, link, iconSize=24) => `

            <div class="card margin flex" onclick="open('${link}', '_blank')">
                
                <div class="row grow flex">
                    
                    <div class="box center" style="width: 60px">
                        <!-- ICON -->
                        <div style="font-size: ${iconSize}px;">${icon}</div>
                    </div>
                    
                    <div class="grow" style="padding: 10px 10px 10px 0;">
                        
                        <div class="flex column">
                            <div class="box flex row spacebetween">
                                <div class="box center">
                                    <!-- Title -->
                                    <div style="font-size: 17px; color: var(--colorW1); padding: 2px 0;" class="poppins-regular">${title}</div>
                                </div>
                                <div class="box">
                                    <!-- lang -->
                                    <div style="border-radius: 4px; font-size: 9px; background-color: var(--colorG1); color: var(--colorW1); padding: 3px 4px 2px 4px;">
                                        ${lang.toUpperCase()}
                                    </div>
                                </div>
                            </div>
                            <div class="box flex row spacebetween">
                                <!-- description -->
                                <div style="font-size: 13px; color: var(--colorW3); padding: 0 0 2px 0;" class="poppins-regular box">${desc}</div>
                                <!--
                                <div class="box noshrink" style="width: 30px;"></div>
                                -->
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div> <!-- Card -->
            
            
`



cc.innerHTML += card(
'☄️',
'Particle Life',
'Simple rules give rise to complex systems',
'html',
'https:/\/artony4444.github.io/particle-life/')

cc.innerHTML += card(
'♟',
'Static Chess',
'A simple chess board',
'html',
'https:/\/artony4444.github.io/static-chess/',
28)

