var osmanli_cal = new Vue({
el: '#events',
	data:{
		calender: 'Hijri',
		month: '',
		year: '',
		sel_day: '',
		month_days:[],
		card_1: false,
		english_cal: {
			date: new Date(),
			month_days: []
		},
		hijri_cal: {
			date: new Date(),
			month_days: [],
			month: '',
			year:'',
		},
		card_2: '',
		text_card_1: '',
		events_hijri: {
			1: {
				1:"Islamic New Year",
				9:"Urs of Hz. Abul Hasan Kharkani (KS),Hz. Habibullah MirzaJan-i Jananel-Mazhar (KS)",
				10: "Ashura Adam (AS) forgiven,Ship of Nuh (AS) finds safety,Yunus (AS) freed from fish,Ismail (AS) born,Nation of Musa (AS) saved,Shahadat of Imam Huseyn (AS)",
				17: "Urs of Shaykh Muhammad Efendi el- Yeraghi (KS)",
				19:"Urs of Dervish Muhammad el-Buhari (KS)",
			},
			2: {
				5:  "Urs of Haje Yakub el-Cherhi (KS)",
				16: "Birthdate of Sheykh Lokman Efendi Hz.",
				17: "Urs of Sheykh Ali Hujwiri (KS)",
				22: 'Urs of Ghulam Ali Abdullah Dehlevi (KS)',
				28: 'Shahadat of Hazrat Hasan ibn Ali (RA),Urs of Mujaddid Alf-Thani Imam Rabbani Ahmed Faruk el-Sirhindi (KS)',
			},
			3: {
				3: 'Urs of Pir-i-Tarikat Bahauddin Shah Naksibendi (KS),Ebu Muhammed elMedeni (KS)',
				9: 'Urs of Muhammed Masum-ur Rabbani (KS)',
				11: 'Mevlid Kandili Observed',
				12: 'Mevlid KandiliBirth of The Holy Prophet Muhammadص',
				13: 'Urs of Haje Yusuf el-Hamedani (KS),Imam el-Hatim Abdul Khalik Gujdevani (KS),Haji Ubeydullah el-Ahrar Semerkendi (KS),Hz.Muhammad el-Zahid (KS)',
				14: 'Urs of Haje Mahmud Injir el-Faghnevi (KS),Ebu Ahmed el-Sughuri (KS)',
				22: 'Urs of Haje Yusuf el-Hamedani (KS)',
			},
			4: {
				7: 'Urs of Imam Malik (RA)',
				11: 'Urs of Ghawth el-Azam Sheykh Abdul Qadir Gilani (KS)',
				12: 'Urs of Sheykh el-Akbar Muhiyuddin Ibn Arabi (KS),Imam Ahmed ibn Hanbal (RA)',
				14: 'Urs of Imam el-Ghazali (RA)',
				18: 'Birthdate of Sahib elSayf Sheykh Abdul Kerim el-Kibrisi el-Rabbani (KS)',
				28: 'Urs of Ulu Hakan Sultan Abdul Hamid Han II (JM)',

			},
			5: {
				22: "Urs of Seyyid Ahmad el-Rufai (KS),Sahib el-Sayf's Grandfather Mehmet Ahmet (First Shehid of Cyprus)",
				27: 'Urs of Seyyid Sherafuddin Daghestani (KS)'
			},
			6: {
				1: 'Urs of Sultan Bahu (KS)',
				5: 'Urs of Mevlana Jelaleddin Rumi (KS)',
				10: 'Urs of Haji Muhammed Baba el-Semmasi (KS)',
				22: "Urs of Seyyid el-Evliya Ebu Bakr el-Siddik (RA)",
				25: "Urs of Muhammed el-Bakibillah Semerkendi (KS)"
			},
			7: {
				3: "Laylat el-Ragaib",
				4: "Urs of Imam Shafi (RA)",
				5: "Establishment of Osmanli Dergahi,Urs of Hazrat Hasan elBasri (KS)",
				6: "Urs of Sheykh Muinuddin Chishti (KS)",
				8: "Veiling of Sultan el-Evliya Sheykh Mevlana Muhammad Nazim Adil el-Hakkani (KS)",
				9: "Urs of Hazrat Shams el-Tabrizi (KS)",
				10: "Urs of Hazrat Salman el-Farsi (RA)",
				20: "Urs of Haje Alauddin Muhammed el-Attar (KS)",
				26: "Laylat el-Miraj",
				27: "Urs of Hazrat Juneyd el-Baghdadi (KS)",
			},
			8: {
				2: "Urs of Imam el-Azam Abu Hanifa (RA)",
				10: "Veiling of Sahib el-Sayf Sheykh Abdul Kerim el-Kibrisi el-Rabbani (KS)",
				14: "Laylat el-Berat,Urs of Sultan Beyazid Han (JM)",
				23: "Birthdate of Sultan el-Evliya Sheykh Mevlana Muhammad Nazim Adil el-Hakkani (KS)",
			},
			9: {
				3: "Urs of Sheykh Abdullah Faiz el-Daghestani (KS),Hazrat Fatima (RA),Has Muhamme dShirvani (KS)",
				10: "Feth-i-Mecca,Urs of Hazrat Khadijah (RA)",
				14: "Urs of Sultan el-Arifin Beyazid Bestami (KS)",
				17: "Battle of Badr,Urs of Hazrat Ayesha (RA)",
				21: "First Revelation in Cave of Hira,Shahadat of Hazrat Ali el-Murtaza (KW)",
				24: "Conquet of Istanbul by Sultan Mehmet Fatih Han (JM)",
				26: "Laylat el-Qadr",
				30: "Urs of Sultan Abdul Aziz Han (JM)",
			},
			10: {
				1: "EID EL-FITR",
				3: "Battle of Uhud",
				5: "Battle of Hunayn,Urs of Seyyid Jemaleddin Gumukiyyi el-Huseyni (KS)",
				6: "Shahadat of Hazrat Hamza (RA)",
				9: "Battle of Khandaq,Urs of Yavuz Sultan Selim Han (JM)",
				12: "Urs of Ebu Hasan el-Shazili (KS)",
				21: "Urs of Sultan Abdul Mecid Han (JM)",
				25: "Urs of Imam Jafar el-Sadik (RA)",
			},
			11: {
				13: "Urs of Ziyauddin Halid el-Baghdadi (KS)",
				18: "Urs of Haji Aziz Ali el-Ramitani (KS)",
			},
			12: {
				8: "Start of Hajj",
				9: "AREFE DAY",
				10: "EID EL-ADHA Urs of Sheykh Ismail Enerani (KS)",
				18: "Shahadat of Hazrat Osman el-Ghani (RA)",
				26: "Shahadat of Hazrat Umar el-Faruq (RA)"
			}
		},
		events_english: {
			1: {
				10: "Urs of Sultan Ulu Hakan Abdul Hamid Han II (JM)",
			},
			2: {

			},
			3: {
				2: "Veiling of the Khilafat",
				23: "Battle of Canakkale",
			},
			4: {
				20: "Birthdate of Sheykh Lokman Efendi Hz",	
				28: "Birthdate of Sultan el-Evliya Sheykh Mevlana Muhammad Nazim Adil el-Hakkani (KS)",
			},
			5: {
				7: "Veiling of Sultan el-Evliya Sheykh Mevlana Muhammad Nazim Adil el- Hakkani (KS)",
				20: "Sahib el-Sayf’s Final Departure from Osmanli Dergahi",
			},
			6: {
				30:"Veling of Sahib el-Sayf Sheykh Abdul Kerim el-Kibrisi el-Rabbani (KS)",

			},
			8: {},
			7: {
				10: "Establishment of Osmanli Dergahi"
			},
			9: {
				22: "Urs of Yavuz Sultan Selim Han (JM)",
				30: "Urs of Sultan el-Awliya Sheykh Abdullah Faiz el-Daghestani (KS) "
			},
			10: {
				24: "Urs of Ebul Fukara Seyyid Haji Fuat el-Rabbani",
				27: "Urs of Sahib el-Sayf's Brother Ayhan Fuat",
			},
			11: {
				11:'Birthdate of Sahib el-Sayf Sheykh Abdul Kerim elKibrisi el-Rabbani (KS)',
			},
			12: {

			},
		},

		event_month: null,
     },
     methods: {
	click_month: function() {
		if (this.calender == 'Hijri') { 
			month = new Intl.DateTimeFormat('en-FR-u-ca-islamicc', {
									month: 'numeric'
				}).format(this.hijri_cal.date);

			this.event_month =  this.events_hijri[month]
				
		} else {
			month = this.english_cal.date.getMonth();
			console.log(month)
			this.event_month =  this.events_english[month]
		}
		this.card_2 = true;

	}, 
	click_date: function(x){
		 
		 if (this.calender == 'Hijri') { 
		 
		 	month = new Intl.DateTimeFormat('en-FR-u-ca-islamicc', {
		     					month: 'numeric'
		  	}).format(this.hijri_cal.date);
		 	console.log("Month",month)
			event_line = this.events_hijri[month][x];
		
		} else {
		
			month = this.english_cal.date.getMonth();
			console.log(month)
			event_line = this.events_english[month][x];

		}


		if (event_line != undefined) {
			this.sel_day = x;
			this.text_card_1 = event_line.replace(/,/g,'\n * ');
			this.card_1 = true;
		}
	},
     toggleCalender: function(){
	     // this.calender = this.calender == 'English' ? "Hijri":"English";
	     if (this.calender == 'Hijri') {
			this.english_cal.date = this.hijri_cal.date;
			this.calender = 'English';
			this.change_date(this.english_cal.date);
	     } else {

		    this.hijri_cal.date = this.english_cal.date;
			this.calender = "Hijri";
			this.change_date(this.hijri_cal.date);
	     }

     },

	     lastday_english : function() {
		     
		     this.month_days = []
		     this.english_cal.month_days = []
			     current_date =  this.english_cal.date
			     adj = this.english_cal.date.getDay()
			     total_days = getDaysInMonth(current_date.getMonth(),current_date.getFullYear())
		
			     for (x = 1; x <= adj; x++){
				 this.english_cal.month_days.push('');
			     }

			     for (x = 1; x <= total_days;	x++) {
				     this.english_cal.month_days.push(x);
			     }
			     this.month_days = this.english_cal.month_days
	     },

	     lastday_hijri: function() {
		     this.month_days = []
		     this.hijri_cal.month_days = [];
		     current_date = this.hijri_cal.date;
		    
		     this.hijri_cal.month = new Intl.DateTimeFormat('en-FR-u-ca-islamicc', {
		     					month: 'numeric'
		     				}).format(current_date);

		     this.hijri_cal.year = new Intl.DateTimeFormat('en-FR-u-ca-islamicc', {
		     					year: 'numeric'
						}).format(current_date);
		     temp_date = new Date(current_date);
		     week_day = null;
		     last_day = null;

		     while (new Intl.DateTimeFormat('en-FR-u-ca-islamicc', {month:'numeric'}).format(temp_date) == this.hijri_cal.month) {
			     if (new Intl.DateTimeFormat('en-FR-u-ca-islamicc', {day:'numeric'}).format(temp_date) == 1) {
				     week_day = new Intl.DateTimeFormat('en-FR-u-ca-islamicc', {weekday:'short'}).format(temp_date);
				     days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
				     week_day = days.indexOf(week_day);
			     }

			     temp_date.setDate( temp_date.getDate() - 1 )
		     }

		     
		     temp_date = new Date(current_date);
		
		    while (new Intl.DateTimeFormat('en-FR-u-ca-islamicc', {month:'numeric'}).format(temp_date) == this.hijri_cal.month) {
				last_day = new Intl.DateTimeFormat('en-FR-u-ca-islamicc', {day:'numeric'}).format(temp_date) 

			     temp_date.setDate( temp_date.getDate() + 1 )
		    }
			

		    for (x = 1; x <= week_day; x++){
			this.hijri_cal.month_days.push('');
		    }

		    for (x = 1; x <= last_day;	x++) {
			 this.hijri_cal.month_days.push(x);
		    }
		    
		    this.month_days = this.hijri_cal.month_days
			
		    this.hijri_cal.month = new Intl.DateTimeFormat('en-FR-u-ca-islamicc', {
		     					month: 'long'
		     }).format(current_date);

		
	
	     },

	     change_date: function(date) {
			     
		     if(this.calender == 'Hijri') {
			     	this.hijri_cal.date = new Date(date);
				this.lastday_hijri();
		    
			     	month = new Intl.DateTimeFormat('en-FR-u-ca-islamicc', {
		     					month: 'numeric'
		     		}).format(this.hijri_cal.date);
				this.month = islamic_month_name(month)
				this.year = this.hijri_cal.year.replace(' AH','') + ' AH' ;

			} else 	{ 
				this.english_cal.date = new Date(date)
			     	this.lastday_english()
				this.month = english_month_name(this.english_cal.date) 
				this.year = this.english_cal.date.getFullYear() + " AD"

			}
			this.click_month()
	     },
	    next_month: function() {
	
		    if(this.calender == 'Hijri') {   
			    
			    temp_date = new Date(this.hijri_cal.date);
			    
			    while (new Intl.DateTimeFormat('en-FR-u-ca-islamicc', {month:'long'}).format(temp_date) == this.hijri_cal.month) {
				 temp_date.setDate( temp_date.getDate() + 1 );
			    }
			  
			    this.hijri_cal.date = temp_date;
			    
			    this.change_date(this.hijri_cal.date)

		    } else {
			this.english_cal.date.setMonth(	this.english_cal.date.getMonth() + 1)
			this.change_date(this.english_cal.date)
		    }
	    },
	    pre_month: function(){
		    if(this.calender == 'Hijri') {    
			    temp_date = new Date(this.hijri_cal.date);
			    
			    while (new Intl.DateTimeFormat('en-FR-u-ca-islamicc', {month:'long'}).format(temp_date) == this.hijri_cal.month) {
				 temp_date.setDate( temp_date.getDate() - 1 );
			    }
			  
			    this.hijri_cal.date = temp_date;
			    
			    this.change_date(this.hijri_cal.date)


		    } else {
			this.english_cal.date.setMonth(	this.english_cal.date.getMonth() - 1)
				
			this.change_date(this.english_cal.date)
		    }

	    },
		has_event: function(day) {
			
			if (day == '') {
				return
			}

		 if (this.calender == 'Hijri') { 
			 
				month = new Intl.DateTimeFormat('en-FR-u-ca-islamicc', {
									month: 'numeric'
				}).format(this.hijri_cal.date);
				event_line = this.events_hijri[month][day];
			
			} else {
			
				month = this.english_cal.date.getMonth();
				event_line = this.events_english[month][day];

			}


			if (event_line != undefined) {
				return true;
			} else {
				return false;
			}

			}
		  }
	   });

	var getDaysInMonth = function(month,year) {
		// Here January is 1 based
		//Day 0 is the last day in the previous month
		return new Date(year, month+1, 0).getDate();
		// Here January is 0 based
		// return new Date(year, month+1, 0).getDate();
	};

	var english_month_name = function(dt){
		mlist = [ "January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
		return mlist[dt.getMonth()];
	};

	var islamic_month_name = function(dt) {
		mlist = ["Muharram","Safar","Rabi`I", "Rabiʻ II", "Jumada I", "Jumada II","Rajab", "Shaʻban", "Ramadan", "Shawwal","Dhuʻl-Qiʻdah","Dhuʻl-Hijjah"]
		return mlist[dt-1];
	}

	osmanli_cal.change_date(new Date())