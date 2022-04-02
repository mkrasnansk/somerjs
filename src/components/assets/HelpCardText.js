import React from "react";
import { Card, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Flip  } from "react-reveal";

export const HelpCardText = () => {
	const anim = useSelector((state) => state.menuStates.anim);
    
	return (
		<Flip  bottom delay={100}  cascade when={anim}>
			<Card>
				<Card.Body>
					<p>
						Sharding distributes data across a cluster of machines. Starting in 3.4,
						MongoDB supports creating zones of data based on the shard key. In a
						balanced cluster, MongoDB directs reads and writes covered by a zone only to
						those shards inside the zone. See the Zones manual page for more
						information. Support for Multiple Storage Engines MongoDB supports multiple
						storage engines:
					</p>
					<p>
						WiredTiger Storage Engine (including support for Encryption at Rest)
						In-Memory Storage Engine. In addition, MongoDB provides pluggable storage
						engine API that allows third parties to develop storage engines for MongoDB.
					</p>
					<p>
						<span className="badge bg-secondary  p-2">
							← What is MongoDB? Getting Started →{" "}
						</span>
						<Nav.Link className="d-inline btn-link">On this page</Nav.Link>
					</p>
				</Card.Body>
				<Card.Footer>
					<p>Document Database</p>
				</Card.Footer>
			</Card>
		</Flip>
	);
};
