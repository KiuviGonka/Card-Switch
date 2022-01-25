const config = require('./config.json');
let zoneId;


module.exports = function CardPresets(mod) {
	const command = mod.command;
	let mode = true,
		n1,
		n2;
	command.add('dpsCard', {
        $none() {
            mode = true;
			setPresetAndEffects(n1, n2);
			command.message(`Card mode is now: ${mode ? "Dps" : "goblin"}.`);
		}
		});
	function modeChange(){
		mode = !mode;
		setPresetAndEffects(n1, n2);
		command.message(`Swap to: ${mode ? "Dps" : "goblin"}.`);
	}
	mod.hook('S_USER_DEATH', 1, event => {
		if(event.name === mod.game.me.name){
			mod.setTimeout(modeChange, 100);
		}
			
	});
	mod.hook('C_REVIVE_NOW', 2, event => {
			mod.setTimeout(modeChange, 1000);
	});

    mod.hook('S_LOAD_TOPO', 3, (event) => 
		{
			mode = true,
			zoneId = event.zone;
		
			// No type
				if (zoneId == 9713||zoneId ==9126) 
					{
						losnn('basic')
						mod.command.message(`<font color="#fff317">Card set mode</font> - <font color="#fff317">None Type -  ${mode ? "Dps" : "goblin"}</font>`);
						return true;
					}
			
			// Argon set
				else if (zoneId == 3023|| zoneId == 3108||zoneId == 3107||zoneId == 3026||zoneId == 3126) 
					{
						losnn('argon');
						mod.command.message(`<font color="#fff317">Card set mode</font> - <font color="#fff317">Argon -  ${mode ? "Dps" : "goblin"}</font>`);
						return true;
					}
					
			// Demon set
				else if (zoneId == 3036||zoneId ==3041||zoneId ==3044) 
					{
						losnn('demon')
						mod.command.message(`<font color="#fff317">Card set mode</font> - <font color="#fff317">Demon -  ${mode ? "Dps" : "goblin"}</font>`);
						return true;
					}
					
			// Giant Set
				else if (zoneId == 9070) 
					{
						losnn('giant')
						mod.command.message(`<font color="#fff317">Card set mode</font> - <font color="#fff317">Giant -  ${mode ? "Dps" : "goblin"}</font>`);
						return true;
					}
					
		    // Ancestor set
				else if (zoneId == 3106||zoneId == 3206||zoneId == 3042||zoneId == 3103||zoneId == 3203) 
					{
						losnn('ancestor')
						mod.command.message(`<font color="#fff317">Card set mode</font> - <font color="#fff317">Ancestor -  ${mode ? "Dps" : "goblin"}</font>`);
						return true;
					}
			
			// Any Azart Dungeon 
				else if (zoneId == 3202||zoneId == 3046||zoneId == 3105||zoneId == 3205||zoneId == 3102||zoneId == 3104||zoneId == 3204
				||zoneId == 3040) 
					{
						losnn('azart')
						mod.command.message(`<font color="#fff317">Card set mode</font> Azart - <font color="#fff317"> -  ${mode ? "Dps" : "goblin"}</font>`);
						return true;
					}
			
			// God set
				if(zoneId == 9044) 
					{
						losnn('god')
						mod.command.message(`<font color="#fff317">Card set mode</font> - <font color="#fff317">God -  ${mode ? "Dps" : "goblin"}</font>`);
						return true;
					}
					
		
			// Magical device
				if(zoneId == 3034) 
					{
						losnn('device')
						mod.command.message(`<font color="#fff317">Card set mode</font> - <font color="#fff317">Magical device -  ${mode ? "Dps" : "goblin"}</font>`);
						return true;
					}
					
			// *********************************************MORE OF ONE BOSS ********************************//		
		mod.hook('S_SPAWN_NPC', 12, (event) => 
			
		{	
				//Frost Reach
				if(zoneId == 7012) 
					{
						switch (event.huntingZoneId)
							{
								// Sabranak
								case 34: 
						
									switch (event.templateId) 
										{	
											case 2003: // Sabranak
											setPresetAndEffects(25, config.dragonPreset -1)
											mod.command.message('<font color="#fff317">Sabranak</font> - <font color="#fff317">Dragon</font>');
											return true;
										}
								// Frygaras
								case 34: 
						
									switch (event.templateId) 
										{	
											case 2002: // Frygaras
											setPresetAndEffects(25, config.dragonPreset -1)
											mod.command.message('<font color="#fff317">Frygaras</font> - <font color="#fff317">Dragon</font>');
											return true;
										}
							}
					}
				
				//Timeless Woods - Blessing Basin
				if(zoneId == 7011) 
					{
						switch (event.huntingZoneId)
							{
								// Anansha
								case 29: 
						
									switch (event.templateId) 
										{	
											case 2001: // Anansha
											setPresetAndEffects(29, config.magicalPreset -1)
											mod.command.message('<font color="#fff317">Anansha</font> - <font color="#fff317">Magical Creature</font>');
											return true;
										}
										
								// Ortan
								case 434: 
									
									switch (event.templateId) 
										{	
											case 7000: // Ortan
												setPresetAndEffects(30, config.beastPreset -1)
												mod.command.message('<font color="#fff317">Ortan</font> - <font color="#fff317">Beast</font>');
												return true;
										}
										
								// Dreadreaper
								case 622: 
									
									switch (event.templateId) 
										{	
											case 1000: // Dreadreaper
												setPresetAndEffects(29, config.magicalPreset -1)
												mod.command.message('<font color="#fff317">Dreadreaper</font> - <font color="#fff317">Magical Creature</font>');
												return true;
										}
							}
					}
				
				// Ruinous Manor (Normal)
				if(zoneId == 9770) 
					{
						switch (event.huntingZoneId)
							{
								// Ruinous Manor (Hard)
								case 770: 
									
									switch (event.templateId) 
									{	
										case 1000: // 1 BOSS
											losnn('magical')
											mod.command.message('<font color="#fff317">Resurrected Atrocitas</font> - <font color="#fff317">Magical Creature</font>');
											return true;
											
										case 3000: // 3 BOSS
											losnn('demon')
											mod.command.message('<font color="#fff317">Lachelith</font> - <font color="#fff317">Demon</font>');
											return true;
									}
							}
					}
				
				// Ruinous Manor (Hard)
				if(zoneId == 9970) 
					{
						switch (event.huntingZoneId)
							{
								// Ruinous Manor (Hard)
								case 970: 
									
									switch (event.templateId) 
									{	
										case 3000: // 1 BOSS
											losnn('giant')
											mod.command.message('<font color="#fff317">Manglemore</font> - <font color="#fff317">Giant</font>');
											return true;
									}
							}
					}
				
				// Gossamer Vault (Easy)
				if(zoneId == 3101) 
					{
						switch (event.huntingZoneId)
							{
								// Gossamer Vault (Easy)
								case 3101: 
						
									switch (event.templateId) 
										{	
											case 1000: // 1 BOSS
											losnn('magical')
											mod.command.message('<font color="#fff317">Hellgrammite</font> - <font color="#fff317">Magical Creature</font>');
											return true;
											case 2001: // 2 BOSS
											losnn('magical')
											mod.command.message('<font color="#fff317">Gossamer Regent</font> - <font color="#fff317">Magical Creature</font>');
											return true;
										}
							}
					}
				
				// Grotto of Lost Souls (Hard)
				if(zoneId == 9982) 
					{
						switch (event.huntingZoneId)
							{
								// Grotto of Lost Souls (Hard)
								case 982: 
						
									switch (event.templateId) 
										{	
											case 1000: // 1 BOSS
											losnn('demon')
											mod.command.message('<font color="#fff317">Primer y segundo boss</font> - <font color="#fff317">Demon</font>');
											return true;
											case 3000: // 3 BOSS
											losnn('dragon')
											mod.command.message('<font color="#fff317">Nightmare Kylos</font> - <font color="#fff317">Dragon</font>');
											return true;
										}
							}
					}
				
				// Velik's Hold
				if(zoneId == 9780) 
					{
						switch (event.huntingZoneId)
							{
								// Grotto of Lost Souls (Hard)
								case 780: 
						
									switch (event.templateId) 
										{	
											case 1000: // 1 BOSS
											losnn('magical')
											mod.command.message('<font color="#fff317">Primer y segundo boss</font> - <font color="#fff317">Magical Creature</font>');
											return true;
											case 3000: // 3 BOSS
											losnn('demon')
											mod.command.message('<font color="#fff317">Veldeg</font> - <font color="#fff317">Demon</font>');
											return true;
										}
							}
					}
				
				//Lorcada
				if(zoneId == 7022) 
					{
						switch (event.huntingZoneId)
							{
								// Cerrus
								case 994: 
									
									switch (event.templateId) 
									{	
										case 1000: // Cerrus
											setPresetAndEffects(30, config.beastPreset -1)
											mod.command.message('<font color="#fff317">Cerrus</font> - <font color="#fff317">Beast</font>');
											return true;
									}
							}
					}
				
				// Vehemos
				if(zoneId == 7015) 
					{
						switch (event.huntingZoneId)
							{
								// Vehemos
								case 620: 
									
									switch (event.templateId) 
									{	
										case 1000: // Vehemos
										setPresetAndEffects(35, config.giantPreset -1)
										mod.command.message('<font color="#fff317">Vehemos</font> - <font color="#fff317">Giant</font>');
										return true;
									}
							}
					}

				//Val Palrada
				if(zoneId == 7013) 
					{
						switch (event.huntingZoneId)
							{
								// Hazard
								case 777: 
									
									switch (event.templateId) 
									{	
										case 77730: // Hazard
											setPresetAndEffects(29, config.magicalPreset -1)
											mod.command.message('<font color="#fff317">Hazard</font> - <font color="#fff317">Magical Creature</font>');
											return true;
									}
							}
					}
				
				//Commander Residence
				if(zoneId == 3030) 
					{
						switch (event.huntingZoneId)
							{
								// Commander Residence
								case 3030: 
									
									switch (event.templateId) 
									{
										case 1000: //Maknakh
											losnn('azart')
											mod.command.message('<font color="#fff317">Maknakh</font> - <font color="#fff317">Azart</font>');
											return true;
										
										case 2000: //LB-1
											losnn('device')
											mod.command.message('<font color="#fff317">LB-1</font> - <font color="#fff317">Magical Device</font>');
											return true;
									}
							}
					}
					});
	});

 function setPresetAndEffects(colId, presetId)
    {

        clearEffects();
        mod.toServer('C_ACTIVATE_CARD_COMBINE_LIST', 1, {
            id: colId
        })
        mod.toServer('C_CHANGE_CARD_PRESET', 1, {
            preset: presetId
        })
    }

   
		
    function losnn(x)
    {
		switch (x)
			{
				case 'argon': 
					n1 = 24;
					n2 = config.argonPreset -1;
					break;
				case 'azart': 
					n1 = 37;
					n2 = config.azartPreset -1;
					break;
				case 'demon': 
					n1 = 32;
					n2 = config.demonPreset -1;	
					break;
				case 'god': 
					n1 = 26;
					n2 = config.godPreset -1;
					break;
				case 'ancestor': 
					n1 = 33;
					n2 = config.ancestorPreset -1;
					break;
				case 'dragon': 
					n1 = 25;
					n2 = config.dragonPreset -1;
					break;
				case 'magical': 
					n1 = 29;
					n2 = config.magicalPreset -1;
					break;
				case 'device': 
					n1 = 31;
					n2 = config.magicaldevicePreset -1;
					break;
				case 'giant': 
					n1 = 35;
					n2 = config.giantPreset -1;
					break;
				case 'beast': 
					n1 = 30;
					n2 = config.beastPreset -1;
					break;
				case 'basic': 
					n1 = config.secondaryEffect;
					n2 = config.basicPreset -1;
					break;
			}
			setPresetAndEffects(n1, n2);
    }
	
	 function clearEffects()
    {
        for (let i = 0; i < 39; i++) {
            
            mod.toServer('C_DEACTIVATE_CARD_COMBINE_LIST', 1, {
                id: i
            })
            
        }
		
		//if (zoneId == 3036 ||zoneId == 9044 )
		if ( mode === false ) 
					{
						// Sky Cruiser (Hard)
						mod.toServer('C_ACTIVATE_CARD_COMBINE_LIST', 1, {
						id: config.defaultEffectSC })
					}
					else 
						// others zones
						{
						mod.toServer('C_ACTIVATE_CARD_COMBINE_LIST', 1, {
						id: config.defaultEffect })
					}
        
			
    }

}
