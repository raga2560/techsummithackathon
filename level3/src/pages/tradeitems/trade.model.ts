export class TradeItemModel {
	
	
			title: string;
            image:  string;
            description: string;
			type : string;
            likes: number = 0;
            comments: number =0;
			certifier: string;
			certifiername: string ;
			producerid: string ;
			expirydate : number;
			baseprice : number = 0;
			unitsize : number = 0;
			prices : Array <any>;
			offer: string ;
			unitype : string ;
			pricegiven: number;
			
			traded: boolean;
			tradedamount: 0;
			listingdate: number;
			
}

/*
export class FeedModel {
  category: any;
  posts: Array<FeedPostModel>;
}

*/