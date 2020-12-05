class Constants {

		 
		 gares = [];
		 
		 constructor (){
			 this.remplir();
		 }
		 remplir(){
			 let gare;
		 gare =  { lat: 36.4734699, lng: 2.6227605};
		 this.gares.push(gare);
		 
		 gare =  { lat: 36.4710308, lng:  2.6909626};
		 this.gares.push(gare);
		 
		 gare =  { lat: 36.4644491, lng:  2.7373451};
		 this.gares.push(gare);
		 
		 gare =  { lat: 36.479281, lng:  2.8178684};
		 this.gares.push(gare);
		 
		 gare =  { lat: 36.5196985, lng:  2.8527909};
		 this.gares.push(gare);
		 
		 gare =  { lat: 36.5651507, lng:  2.9143182};
		 this.gares.push(gare);
		 
		 gare =  { lat: 36.6307717, lng:  3.0097625};
		 this.gares.push(gare);
		 
		 gare =  { lat: 36.6669507, lng:  3.052256};
		 this.gares.push(gare);
		 
		 gare =  { lat: 36.688947, lng:   3.078228};
		 this.gares.push(gare);
		
		 gare =  { lat: 36.696829, lng:   3.0949508};
		 this.gares.push(gare);
		 
		 gare =  { lat:36.7221114, lng:   3.1327658};
		 this.gares.push(gare);
		 
		 gare =  { lat:36.7350418, lng:  3.1199608};
		 this.gares.push(gare);
		 
		 gare =  { lat:36.7455135, lng:  3.0937959};
		 this.gares.push(gare);
		 
		 gare =  { lat:36.7563153, lng:  3.06556};
		 this.gares.push(gare);
		 
		 gare =  { lat:36.7683549, lng:  3.0570694};
		 this.gares.push(gare);
		 
		  
		 gare =  { lat:36.7794085, lng:   3.0617707};
		 this.gares.push(gare);
		 
		 		gare = { lat :36.7037008, lng: 3.1704015};
		 this.gares.push(gare); 
    
        gare = { lat :36.7070407, lng: 3.1860306};
		 this.gares.push(gare); 
       
        gare = { lat :36.7146946, lng: 3.2107268};
		 this.gares.push(gare);
        
        gare = { lat :36.7342795, lng: 3.2825956};
		 this.gares.push(gare);
        
        gare = { lat :36.7351458, lng: 3.3421015};
		 this.gares.push(gare);
       

        gare = { lat :36.7405241, lng: 3.4128569};
		 this.gares.push(gare);
      

        gare = { lat :36.7536328, lng: 3.4355054};
		 this.gares.push(gare);
       

        gare = { lat :36.7534351, lng: 3.473416};
		 this.gares.push(gare);
       

        gare = { lat :36.7314837, lng: 3.5010325};
		 this.gares.push(gare);
       

        gare = { lat :36.7253181, lng: 3.5529752};
		 this.gares.push(gare);
       
        gare = { lat :36.6395038, lng:2.9346995};
		 this.gares.push(gare);
        

        gare = { lat :36.6802461, lng:2.8918286};
		 this.gares.push(gare);
        

        gare = { lat :36.6919229, lng:2.8713871};
		 this.gares.push(gare);
       

        gare = { lat :36.7021646, lng:2.8489215};
		 this.gares.push(gare);
		 
		 }
		 
		 
		 
		
                  
	static addGares(map){
		 for(i=0;i<constants.gares.length;i++){
		var marker = L.marker(constants.gares[i]).addTo(mymap);
		}

	
	static get iconTrainAlger(){ 
	 var iconTrainAlger= {
        url: "images/train-black.png", // url
        scaledSize: new google.maps.Size(20, 20), // size
    };
	return iconTrainAlger;
	}
	 static get iconTrainAffroun() {
		var iconTrainAffroun= {
        url: "images/train-blue.png", // url
        scaledSize: new google.maps.Size(20, 20), // size
    };
	return iconTrainAffroun;
	 }
	static get iconTrainThenia() {
		 var iconTrainThenia= {
        url: "images/train-vert.png", // url
        scaledSize: new google.maps.Size(20, 20), // size
    };
	return iconTrainThenia;
	}
	static get iconTrainZeralda() {
		var iconTrainZeralda= {
        url: "images/train-or.png", // url
        scaledSize: new google.maps.Size(20, 20), // size
    };
	return iconTrainZeralda;
	}
	static get iconTrainTizi() {
		var iconTrainTizi= {
        url: "images/train-orange.png", // url
        scaledSize: new google.maps.Size(20, 20),		// size

    };
	return iconTrainTizi ;}
	
}