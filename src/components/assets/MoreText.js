import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Nav, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Slide } from "react-reveal";
import Jump from "react-reveal/Jump";
import Pulse from "react-reveal/Pulse";
import { decrement, increment } from "../../features/counter/counterSlice";
import { changeAnim } from "../../features/state/menuStatesSlice";
import { HelpCardText } from "./HelpCardText";
let range;

const smoothShow = () => {
	let cards = document.getElementsByClassName("card");
	for (const card of cards) {
		if (card.offsetTop < range) {
			console.log(card);
			console.log(card.offsetTop);
		}
	}
};
const sumRange = () => {
	range = window.innerHeight + window.scrollY;
};
const scrollListener = () => {
	window.addEventListener("scroll", sumRange);
};
const getHeightPosition = () => {
	range = window.pageYOffset + window.innerHeight;
};

export default function MoreText() {
	const count = useSelector((state) => state.counter.value);
	const anim = useSelector((state) => state.menuStates.anim);
	const dispatch = useDispatch();
	const [tada, setTada] = useState(false);

	useEffect(() => {
		scrollListener();
		getHeightPosition();
		smoothShow();
		// console.log(document.getElementsByClassName("card"));
		return () => {
			window.removeEventListener("scroll", sumRange);
		};
	}, []);

	const inrementHandle = () => {
		dispatch(increment());
	};
	return (
		<Container>
			<Slide top cascade when={anim}>
				<Card className="mb-3">
					<Card.Header>
						<h1>
							Introduction to <span className="text-primary"> MongoDB</span>
						</h1>
					</Card.Header>
					<Card.Body>
						<Row className="align-items-center justify-content-around">
							<Col className="col-auto">
								<Button onClick={inrementHandle} className="btn-success btn-xl">
									increment
								</Button>
							</Col>
							<Col className="col-auto">
								<Pulse spy={count}>
									<p className="fs-1 font-weight-bold">{count}</p>
								</Pulse>
							</Col>
							<Col className="col-auto">
								<Button
									onClick={() => dispatch(decrement())}
									className="btn-success btn-xl"
								>
									decrement
								</Button>
							</Col>
						</Row>
						Welcome to the MongoDB 5.0 Manual! MongoDB is a document database designed
						for ease of development and scaling. The Manual introduces key concepts in
						MongoDB, presents the query language, and provides operational and
						administrative considerations and procedures as well as a comprehensive
						reference section.
					</Card.Body>
				</Card>
			</Slide>
			<Row className=" row-cols-1 row-cols-xl-2 g-3 mb-3">
				<Col>
					<Slide className="h-100" left opposite cascade when={anim}>
						<div className="h-100">
							<Card className="h-100">
								<Card.Body>
									<p>
										MongoDB offers both local and cloud-hosted deployment
										options:
									</p>
									<p>
										<Pulse when={tada}>
											<span className="badge bg-danger p-2">
												For locally hosted deployments
											</span>
										</Pulse>
										, MongoDB offers both a Community and an Enterprise version
										of the database:
									</p>
									<div className="button-list">
										<Button className="btn-lg  btn-default">nieco</Button>
										<Button className="btn-sm">nieco</Button>
										<Pulse when={tada}>
											<Button className="btn-xs">nieco</Button>
										</Pulse>
										nieco velke
										<Button
											onMouseEnter={() => setTada(!tada)}
											onMouseLeave={() => setTada(!tada)}
											className="btn-xl"
										>
											nieco velke
										</Button>
										<Jump when={tada}>
											<Button>nieco</Button>
										</Jump>
									</div>
								</Card.Body>
							</Card>
						</div>
					</Slide>
				</Col>
				<Col>
					<Slide className="h-100" right opposite cascade when={anim}>
						<div className="h-100">
							<Card className="h-100">
								<Card.Body>
									<p>
										MongoDB Community is the source available and{" "}
										<span className="badge bg-warning p-2">
											free to use edition
										</span>{" "}
										of MongoDB. MongoDB Enterprise is available as part of the
										MongoDB Enterprise Advanced subscription and includes
										comprehensive support for your MongoDB deployment. MongoDB
										Enterprise also adds enterprise-focused features such as
										LDAP and Kerberos support, on-disk encryption, and auditing.
										MongoDB Atlas is a hosted MongoDB Enterprise service option
										in the cloud which requires no installation overhead and
										offers a free tier to get started. Document Database A
										record in MongoDB is a document, which is a data structure
										composed of field and value pairs.
										<span className="text-primary">
											{" "}
											MongoDB documents are similar to JSON objects.
										</span>{" "}
										The values of fields may include other documents, arrays,
										and arrays of documents.
									</p>
								</Card.Body>
							</Card>
						</div>
					</Slide>
				</Col>
			</Row>
			<Slide bottom opposite cascade when={anim}>
				<Row className=" row-cols-1 row-cols-xl-3 g-3 mb-3">
					<Col>
						<Card className="h-100">
							<Card.Body>
								<p>A MongoDB document. The advantages of using documents are:</p>
								<p>
									Documents (i.e. objects) correspond to native data types in many
									programming languages. Embedded documents and arrays reduce need
									for expensive joins. Dynamic schema supports fluent
									polymorphism. Collections/Views/On-Demand Materialized Views
									MongoDB stores documents in collections. Collections are
									analogous to tables in relational databases.
								</p>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className="h-100">
							<Card.Body>
								<p>In addition to collections, MongoDB supports:</p>
								<p>
									Read-only Views (Starting in MongoDB 3.4) On-Demand Materialized
									Views (Starting in MongoDB 4.2). Key Features High Performance
									MongoDB provides high performance data persistence. In
									particular,
								</p>
								<p>
									Support for embedded data models reduces I/O activity on
									database system. Indexes support faster queries and can include
									keys from embedded documents and arrays. Rich Query Language
									MongoDB supports a rich query language to support read and write
									operations (CRUD) as well as:
								</p>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className="h-100">
							<Card.Body>
								<b className="text-warning">
									Data Aggregation Text Search and Geospatial Queries. TIP See
									also: SQL to MongoDB Mapping Chart SQL to Aggregation Mapping
									Chart Learn about the latest query language features with the
									MongoDB Query Language: What's New presentation from
									MongoDB.live 2020. High Availability MongoDB's replication
									facility, called replica set, provides:
								</b>
								<p className="text-danger">
									automatic failover data redundancy. A replica set is a group of
									MongoDB servers that maintain the same data set, providing
									redundancy and increasing data availability.
								</p>
								<p className="text-success">
									Horizontal Scalability MongoDB provides horizontal scalability
									as part of its core functionality:
								</p>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Slide>
			<HelpCardText />
			<HelpCardText />
			<HelpCardText />
			<HelpCardText />
			<HelpCardText />
		</Container>
	);
}
