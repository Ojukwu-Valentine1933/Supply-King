import React, { useState } from "react";
import car from "../../assets/car.png"
import painting from "../../assets/painting.png"
import automotiveCare from "../../assets/car-services.png"
import babyAndKids from "../../assets/mother.png"
import babyGear from "../../assets/baby.png"
import beautyAndCosmetics from "../../assets/cosmetics.png"
import book from"../../assets/contact-book.png"
import construction from "../../assets/hook.png"
import ecoFriendly from "../../assets/nature-product.png"
import electronicsGadget from "../../assets/responsive.png"
import fashionApparel from "../../assets/woman.png"
import fitnessAndWellness from "../../assets/treadmill.png"
import funniture from "../../assets/double-bed.png"
import gardening from "../../assets/gardening.png"
import grocery from "../../assets/grocery.png"
import health from "../../assets/healthcare.png"
import gift from "../../assets/gift-box.png"
import homeEntertainment from "../../assets/watching-a-movie.png"
import homeAppliances from "../../assets/speaker.png"
import industrialSupply from "../../assets/eco-factory.png"
import jewelryAndWatches from "../../assets/jewelry.png"
import kitchenAndDining from "../../assets/kitchen.png"
import musicalInstruments from "../../assets/guitar.png"
import officeSupplies from "../../assets/stationery.png"
import partyAndEventSupplies from "../../assets/party.png"
import petSupplies from "../../assets/pet-food.png"
import photographyAndVideography from "../../assets/camera.png"
import personalCare from "../../assets/cream.png"
import religiousAndCultural from "../../assets/religion.png"
import safetyAndSecurity from "../../assets/cyber-security.png"
import seasonalAndHolidayItems from "../../assets/season.png"
import sportsAndOutdoors from "../../assets/hiking.png"
import toolsAndHardware from "../../assets/tools.png"
import stationary from "../../assets/stationary.png"
import toysAndHobbies from "../../assets/pet-ball.png"
import travelAndLuggage from "../../assets/travel-luggage.png"
import wine from "../../assets/wine-bottle.png"
import wig from "../../assets/wig.png"
import { Link } from "react-router-dom";
import styles from "./Categories.module.css"

import categories from "../../helpers/categories";
function ToggleContent({ title, children }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`toggle-section ${styles.toggle_section}`}>
      <div className="header" onClick={toggleVisibility}>
        <h4 className="category-title">{title}</h4> {/* Added class name */}
        <span className="toggleBtn">{isVisible ? "-" : "+"}</span>
      </div>
      <div className={`content ${isVisible ? "" : "hidden"}`}>{children}</div>
    </div>
  );
}


// Sort the categories alphabetically
categories.sort();



// Mapping each category to its specific content
const categoryContent = {
  "Groceries & Food Supplies": `
      Fresh Produce,
      Dairy Products,
      Frozen Foods,
      Beverages & Snacks,
      Cooking Ingredients`,

  "Personal Care & Hygiene": `
      Bath & Body Products,
      Oral Care,
      Hair Care,
      Skincare Products,
      Feminine Hygiene`,

  "Office Supplies": `
      Paper & Notebooks,
      Writing Instruments,
      Office Equipment,
      Desk Organizers,
      Printer Ink & Toner`,

  "Electronics & Gadgets": `
      Smartphones & Tablets,
      Laptops & Accessories,
      Wearable Technology,
      Smart Home Devices,
      Audio Equipment`,

  "Fashion & Apparel": `
      Men's Clothing,
      Women's Clothing,
      Footwear,
      Accessories,
      Outerwear`,

  "Baby & Kids": `
      Diapers & Wipes,
      Baby Food & Formula,
      Toys & Games,
      Kids' Clothing,
      Nursery Furniture`,

  "Automotive": `
      Car Accessories,
      Tires & Wheels,
      Automotive Tools,
      Car Care Products,
      Car Electronics`,

  "Health & Medical": `
      First Aid Kits,
      Over-the-Counter Medicine,
      Health Monitoring Devices,
      Vitamins & Supplements,
      Mobility Aids`,

  "Sports & Outdoors": `
      Exercise Equipment,
      Camping Gear,
      Outdoor Clothing,
      Sports Equipment,
      Cycling Gear`,

  "Pet Supplies": `
      Pet Food,
      Pet Toys & Accessories,
      Pet Grooming Products,
      Pet Health Products,
      Pet Beds & Carriers`,

  "Cosmetics & Beauty": `
      Makeup,
      Skincare Products,
      Hair Styling Tools,
      Fragrances,
      Nail Care`,

  "Books & Media": `
      Fiction & Non-Fiction Books,
      Magazines & Newspapers,
      Music CDs & Vinyl,
      DVDs & Blu-rays,
      E-books`,

  "Home Appliances": `
      Refrigerators,
      Washing Machines,
      Microwaves,
      Vacuum Cleaners,
      Air Conditioners`,

  "Art & Craft": `
      Painting & Drawing Supplies,
      Crafting Tools,
      Yarn & Fabrics,
      Scrapbooking Materials,
      Art Canvases`,

   "Industrial Supply": `
      Safety Gear,
      Power Tools,
      Industrial Equipment,
      Commercial Cleaning Products,
      Packaging Supplies`,

  "Travel & Luggage": `
      Suitcases & Travel Bags,
      Travel Accessories,
      Travel-sized Toiletries,
      Travel Guides & Maps,
      Luggage Tags`,

  "Jewelry & Watches": `
      Necklaces & Pendants,
      Rings & Earrings,
      Bracelets,
      Watches,
      Jewelry Boxes`,

  "Party & Event Supplies": `
      Party Decorations,
      Disposable Tableware,
      Party Favors,
      Balloons & Helium Tanks,
      Event Lighting`,

  "Musical Instruments": `
      Guitars & Basses,
      Keyboards & Pianos,
      Drums & Percussion,
      Wind Instruments,
      Instrument Accessories`,

  "Tools & Hardware": `
      Hand Tools,
      Power Tools,
      Hardware & Fasteners,
      Tool Storage,
      Measuring Tools`,

  "Home Entertainment": `
      Televisions,
      Home Theater Systems,
      Streaming Devices,
      Gaming Consoles,
      DVD & Blu-ray Players`,

  "Furniture & Decor": `
      Living Room Furniture,
      Bedroom Furniture,
      Office Furniture,
      Home Decor Items,
      Rugs & Carpets`,


  "Photography & Videography": `
      Cameras & Lenses,
      Tripods & Supports,
      Lighting Equipment,
      Camera Bags & Cases,
      Photo & Video Editing Software`,

  "Toys & Hobbies": `
      Action Figures & Dolls,
      Board Games & Puzzles,
      Remote Control Toys,
      Model Kits,
      Educational Toys`,

  "Kitchen & Dining": `
      Cookware & Bakeware,
      Kitchen Appliances,
      Tableware & Cutlery,
      Glassware & Drinkware,
      Kitchen Storage`,

  "Religious & Cultural": `
      Religious Books & Media,
      Religious Artifacts,
      Cultural Clothing,
      Ritual Supplies,
      Spiritual Candles & Incense`,

  "Wines & Spirits": `
      Red & White Wines,
      Champagnes & Sparkling Wines,
      Whiskey & Scotch,
      Vodka & Gin,
      Liquors & Liqueurs`,

  "Seasonal & Holiday Items": `
      Christmas Decorations,
      Halloween Costumes,
      Easter Baskets,
      Thanksgiving Decor,
      New Year's Eve Party Supplies`,

  "Automotive Care": `
      Car Wash Supplies,
      Automotive Wax & Polish,
      Car Cleaning Tools,
      Tire Care Products,
      Car Interior Cleaners`,

  "Gardening & Outdoor": `
      Plants & Seeds,
      Garden Tools,
      Outdoor Furniture,
      Planters & Pots,
      Lawn Care Products`,

  "Fitness & Wellness": `
      Workout Equipment,
      Yoga Mats & Accessories,
      Fitness Trackers,
      Wellness Supplements,
      Exercise Clothing`,

  "Gifts & Souvenirs": `
      Personalized Gifts,
      Gift Baskets,
      Greeting Cards,
      Collectibles,
      Souvenir Items`,

  "Safety & Security": `
      Home Security Systems,
      Surveillance Cameras,
      Fire Safety (Alarms, Extinguishers),
      Safes & Locks,
      Personal Safety Devices`,

  "Baby Gear": `
      Strollers & Car Seats,
      Baby Carriers,
      Baby Monitors,
      Diaper Bags,
      Baby Furniture`,

  "Stationery & School Supplies": `
      Notebooks & Binders,
      Writing Instruments,
      School Backpacks,
      Art Supplies,
      Educational Tools`,

  "Construction Materials": `
      Lumber & Plywood,
      Bricks & Blocks,
      Cement & Concrete,
      Plumbing Supplies,
      Electrical Wiring`,

  "Eco-Friendly Products": `
      Reusable Bags & Containers,
      Eco-friendly Cleaning Products,
      Organic & Natural Foods,
      Sustainable Clothing,
      Solar-powered Gadgets`,

  "Wigs & Hair": `
      Human Hair Wigs,
      Synthetic Wigs,
      Hair Extensions,
      Hair Care Products,
      Hair Styling Tools`
};

const categoryIcon = {
    "Automotive" : car,
    "Art & Craft" : painting,
    "Automotive Care" : automotiveCare,
    "Baby & Kids" : babyAndKids,
    "Baby Gear" : babyGear,
    "Cosmetics & Beauty" : beautyAndCosmetics,
    "Books & Media" : book,
    "Construction Materials" : construction,
    "Eco-Friendly Products" : ecoFriendly,
    "Electronics & Gadgets" : electronicsGadget,
    "Fashion & Apparel" : fashionApparel,
    "Fitness & Wellness" : fitnessAndWellness,
    "Furniture & Decor" : funniture,
    "Gardening & Outdoor" : gardening,
    "Groceries & Food Supplies" : grocery,
    "Health & Medical" : health,
    "Gifts & Souvenirs" : gift,
    "Home Entertainment" : homeEntertainment,
    "Home Appliances" : homeAppliances,
    "Industrial Supply" : industrialSupply,
    "Jewelry & Watches" : jewelryAndWatches,
    "Kitchen & Dining" : kitchenAndDining,
    "Musical Instruments" : musicalInstruments,
    "Office Supplies" : officeSupplies,
    "Party & Event Supplies" : partyAndEventSupplies,
    "Pet Supplies" : petSupplies,
    "Photography & Videography" : photographyAndVideography,
    "Personal Care & Hygiene" : personalCare,
    "Religious & Cultural" : religiousAndCultural,
    "Safety & Security" : safetyAndSecurity,
    "Seasonal & Holiday Items" : seasonalAndHolidayItems,
    "Sports & Outdoors" : sportsAndOutdoors,
    "Tools & Hardware" : toolsAndHardware,
    "Stationery & School Supplies" : stationary,
    "Toys & Hobbies" : toysAndHobbies,
    "Travel & Luggage" : travelAndLuggage,
    "Wines & Spirits": wine,
    "Wigs & Hair": wig
}

categories.sort();
function CategoriesGrid() {
    return (
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <ToggleContent
              title={
                <span>
                  {/* Conditionally render the icon if it exists */}
                  {categoryIcon[category] && (
                    <img
                      src={categoryIcon[category]}
                      alt={`${category} Icon`}
                      className="category-icon"
                    />
                  )}<br/><br/>
                  {category}
                </span>
              }
            >
              <p>{categoryContent[category] || `Explore our wide range of ${category} products.`}</p>
            </ToggleContent>
          </div>
        ))}
      </div>
    );
  }

const CategoriesComponent = () => {
  return (
    <div className="categories-component">
      <h2 className="container">Hey Josh, Here are some categories of goods we supply!</h2>
      <CategoriesGrid />

      <div className="container">
        <Link to={"/dashboard"} className={`form-control text-center ${styles.proceed}`}>
    PROCEED
        </Link>
    
      </div>
      <p className="container">We deliver all these goods and more. Check out for goods <a href="never">we don't deliver</a></p> 
    </div>
  );
};

export default CategoriesComponent;
