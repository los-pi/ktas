import LoginForm from ".";
import { withTests } from "@storybook/addon-jest";
import results from "../../../.jest-test-results.json";

export const DefaultView = () => <LoginForm onSubmit={() => {}} />;
DefaultView.parameters = {
	jest: ["index.test.js"],
};

const story = {
	title: "LoginForm",
	decorators: [withTests({ results })],
};

export default story;
