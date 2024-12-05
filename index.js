import cowsay from "cowsay";
import "dotenv/config";

console.log(
	cowsay.say({
		text: `My name is ${process.env.MY_NAME}, my campus is ${process.env.MY_CAMPUS}`,
		e: "oO",
		T: "U ",
	}),
);
