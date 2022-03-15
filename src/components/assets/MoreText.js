import { Card, Col, Container, Nav, Row } from "react-bootstrap";

export default function MoreText() {
	return (
		<Container>
			<Card  className="mb-3">
				<Card.Header>
					<h1>
						Introduction to <span className="text-primary"> MongoDB</span>
					</h1>
				</Card.Header>
				<Card.Body>
					Welcome to the MongoDB 5.0 Manual! MongoDB is a document database designed for ease of development and scaling. The Manual introduces key concepts in MongoDB, presents the query language, and provides operational and
					administrative considerations and procedures as well as a comprehensive reference section.
				</Card.Body>
			</Card>

			<Row className=" row-cols-1 row-cols-xl-2 g-3 mb-3">
				<Col>
					<Card className="h-100">
						<Card.Body>
							<p>MongoDB offers both local and cloud-hosted deployment options:</p>
							<p><span className="badge bg-danger p-2">For locally hosted deployments</span>, MongoDB offers both a Community and an Enterprise version of the database:</p>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card className="h-100">
						<Card.Body>
							<p>
								MongoDB Community is the source available and <span className="badge bg-warning p-2">free to use edition</span> of MongoDB. MongoDB Enterprise is available as part of the MongoDB Enterprise Advanced subscription and includes comprehensive support for your MongoDB
								deployment. MongoDB Enterprise also adds enterprise-focused features such as LDAP and Kerberos support, on-disk encryption, and auditing. MongoDB Atlas is a hosted MongoDB Enterprise service option in the cloud which
								requires no installation overhead and offers a free tier to get started. Document Database A record in MongoDB is a document, which is a data structure composed of field and value pairs.
								<span className="text-primary"> MongoDB documents are similar to JSON objects.</span> The values of fields may include other documents, arrays, and arrays of documents.
							</p>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row className=" row-cols-1 row-cols-xl-3 g-3 mb-3">
				<Col>
					<Card className="h-100">
						<Card.Body>
							<p>A MongoDB document. The advantages of using documents are:</p>
							<p>
								Documents (i.e. objects) correspond to native data types in many programming languages. Embedded documents and arrays reduce need for expensive joins. Dynamic schema supports fluent polymorphism.
								Collections/Views/On-Demand Materialized Views MongoDB stores documents in collections. Collections are analogous to tables in relational databases.
							</p>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card className="h-100">
						<Card.Body>
							<p>In addition to collections, MongoDB supports:</p>
							<p>Read-only Views (Starting in MongoDB 3.4) On-Demand Materialized Views (Starting in MongoDB 4.2). Key Features High Performance MongoDB provides high performance data persistence. In particular,</p>
							<p>
								Support for embedded data models reduces I/O activity on database system. Indexes support faster queries and can include keys from embedded documents and arrays. Rich Query Language MongoDB supports a rich query
								language to support read and write operations (CRUD) as well as:
							</p>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card className="h-100">
						<Card.Body>
							<b className="text-warning">
								Data Aggregation Text Search and Geospatial Queries. TIP See also: SQL to MongoDB Mapping Chart SQL to Aggregation Mapping Chart Learn about the latest query language features with the MongoDB Query Language: What's
								New presentation from MongoDB.live 2020. High Availability MongoDB's replication facility, called replica set, provides:
							</b>
							<p className="text-danger">automatic failover data redundancy. A replica set is a group of MongoDB servers that maintain the same data set, providing redundancy and increasing data availability.</p>
							<p className="text-success">Horizontal Scalability MongoDB provides horizontal scalability as part of its core functionality:</p>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Card>
				<Card.Body>
					<p>
						Sharding distributes data across a cluster of machines. Starting in 3.4, MongoDB supports creating zones of data based on the shard key. In a balanced cluster, MongoDB directs reads and writes covered by a zone only to those
						shards inside the zone. See the Zones manual page for more information. Support for Multiple Storage Engines MongoDB supports multiple storage engines:
					</p>
					<p>WiredTiger Storage Engine (including support for Encryption at Rest) In-Memory Storage Engine. In addition, MongoDB provides pluggable storage engine API that allows third parties to develop storage engines for MongoDB.</p>
					<p>
						<span className="badge bg-secondary  p-2">← What is MongoDB? Getting Started → </span>
						<Nav.Link className="d-inline btn-link">On this page</Nav.Link>
					</p>
				</Card.Body>
				<Card.Footer>
					<p>Document Database</p>
				</Card.Footer>
			</Card>
		</Container>
	);
}
