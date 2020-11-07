import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

function SearchPage() {
	const dt = new Date().toDateString();

	return (
		<div className="searchPage">
			<div className="serchPage__info">
				<p>
					62 Stays . {dt}
				</p>
				<h1>Stays nearby</h1>
				<Button color="secondary" variant="outlined">
					Cancellation Flexibility
				</Button>
				<Button color="secondary" variant="outlined">
					Type of Place
				</Button>
				<Button color="secondary" variant="outlined">
					Price
				</Button>
				<Button color="secondary" variant="outlined">
					Rooms and Beds
				</Button>
				<Button color="secondary" variant="outlined">
					More Filters
				</Button>

				<SearchResult
					img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
					location="Entire villa . Bangalore"
					title="Quinta da Santana-Luxury Country Villa "
					description="2 Guests · 3 Bedroom · 1 Bed · 1.5 Shared Bathrooms · Wifi · Kitchen · Free Parking · Washing Machine"
					star={4.89}
					stays=" (114)"
					price="₹2,990/ night"
					total="₹8,017 total"
				/>
				<SearchResult
					img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
					location="Sam's Nest/Air conditioned private home!!"
					title="Independant luxury studio apartment"
					description="2 Guests · 1 Bedroom · 1 Bed · 1.5 Shared Bathrooms · Wifi · Kitchen"
					star={4.86}
					stays=" (185)"
					price="₹1,500 / night"
					total="₹4,489 total"
				/>

				<SearchResult
					img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
					location="Farm Stay . Chickmagaluru"
					title="Birds eye-entire home with 360' magnifice view!"
					description="4 Guests · 2 Bedroom · 1 Bed · 2 Bathrooms · Free Parking · Washing Machine"
					star={4.77}
					stays=" (30)"
					price="₹5,499/ night"
					total="₹18,500 total"
				/>
				<SearchResult
					img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
					location="Entire house in Udupi"
					title="Jaya Homestay with Kitchen"
					description="3 Guests · 2 Bedroom · 1 Bed · 2 Private Bathroom · Wifi · Kitchen · Free Parking · Washing Machine"
					star={4.1}
					stays=" (84)"
					price="1,400 / night"
					total="₹5,200 total"
				/>
				<SearchResult
					img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
					location="Private room in Nandhi Hills"
					title="Spacious Peaceful Holiday Home"
					description="6 Guests · 4 Bedroom · 1 Bed · 2.5 Shared Bathrooms · Wifi · Free parking · Dry Cleaning"
					star={4.95}
					stays=" (189)"
					price="₹4,000 / night"
					total="₹18,000 total"
				/>
				<SearchResult
					img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
					location="Private room in Bangalore"
					title="The Blue Room Homestay cottage!"
					description="1 Guest · 1 Bedroom · 1 Bed · 1 Priavte Bathroom · Wifi · Washing Machine"
					star={4.23}
					stays=" (25)"
					price="₹655 / night"
					total="₹2,800 total"
				/>
				<SearchResult
					img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
					location="Earth house in  Chikkamagaluru"
					title="5 Star luxury private home!"
					description="3 Guests · 1 Bedroom · 1 Bed · 1.5 Shared Bathrooms · Wifi · Kitchen · Free Parking · Washing Machine"
					star={4.1}
					stays=" (114)"
					price="₹1,650 / night"
					total="₹4,850 total"
				/>
			</div>
		</div>
	);
}

export default SearchPage;
