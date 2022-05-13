import { useState } from "react";
import { Card } from "react-bootstrap";
import { FormInfoAZiadost } from "./FormInfoAZiadost";
import { FormVerifiedEmail } from "./FormVerifiedEmail";

export const FormHomePage = () => {
	const [isVerified, setIsVerified] = useState(false);

	const formular = "Formular pre kontaktovanie.";
	const overenie = "Overenie emailu";
	return (
		<Card className="border-0">
			<Card.Header>{isVerified ? formular.toUpperCase() : overenie.toUpperCase()}</Card.Header>
			<Card.Body>{isVerified ? <FormInfoAZiadost /> : <FormVerifiedEmail />}</Card.Body>
		</Card>
	);
};
