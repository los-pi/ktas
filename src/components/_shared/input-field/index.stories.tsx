import InputField from ".";
import { text, select, boolean, number } from "@storybook/addon-knobs";
import { PhoneCall, Users, MessageSquare } from "react-feather";
import { withTests } from "@storybook/addon-jest";
import results from "../../../.jest-test-results.json";

const SIZE: any = ["sm", "md"];
const TYPE: any = ["text", "number", "textarea"];
const ICONS: any = [PhoneCall, Users, MessageSquare];

export const WithKnobs = () => (
	<InputField
		error={boolean("Error", false)}
		startIcon={select("Icons", ICONS, ICONS[0])}
		success={boolean("Success", false)}
		disabled={boolean("Disabled", false)}
		type={select("Types", TYPE, TYPE[0])}
		rows={number("Rows", 4)}
		size={select("Size", SIZE, SIZE[1])}
		fullWidth={boolean("Fullwidth", false)}
		id={text("ID", "outlined-basic")}
		label={text("Label", "Top label")}
		placeholder={text("Placeholder", "Placeholder")}
		helperText={text("Helper text", "Helper text")}
		noBorder={boolean("No Border", false)}
	/>
);

WithKnobs.parameters = {
	jest: ["index.test.js"],
};

const story = {
	title: "Input Field",
	decorators: [withTests({ results })],
	parameters: {
		component: InputField,
	},
};

export default story;
