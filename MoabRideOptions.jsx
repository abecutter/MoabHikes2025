import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const trails = [
  {
    name: 'Amasa Back',
    subTrails: 'Hymasa, Captain Ahab',
    miles: '9-12',
    time: '2.5–4 hrs',
    distanceFromHome: '4.6 mi',
    features: 'Tech, ledges, views, famous descents',
    link: 'https://www.mtbproject.com/trail/7002177/amasa-back-captain-ahab-loop',
    coords: [38.5382, -109.6036],
  },
  {
    name: 'T(N)WE',
    subTrails: 'TWE, North 40, Chisholm',
    miles: '10–15',
    time: '3–4.5 hrs',
    distanceFromHome: '7.2 mi',
    features: 'Flow, slickrock, moderate climbs, quiet zone',
    link: 'https://www.mtbproject.com/trail/7023200/north-40-twe-loop',
    coords: [38.5483, -109.4957],
  },
  {
    name: 'Klondike Area',
    subTrails: 'Nome, Alaska, EKG, Klondike Bluff Loop',
    miles: '15–20+',
    time: '3–5 hrs',
    distanceFromHome: '18.1 mi',
    features: 'Mix of tech and flow, variety, bailouts',
    link: 'https://www.mtbproject.com/trail/7002174/klondike-bluffs-loop',
    coords: [38.7143, -109.6783],
  },
  {
    name: 'MAG7 (optional)',
    subTrails: 'Bull Run, Great Escape, Little Canyon, Gemini Bridges Rd',
    miles: '15–20',
    time: '3.5–5 hrs',
    distanceFromHome: '23.3 mi',
    features: 'Point-to-point, fast segments, shuttle recommended',
    link: 'https://www.mtbproject.com/trail/7002176/magnificent-7-mag-7',
    coords: [38.6099, -109.7323],
  },
  {
    name: 'Navajo Rocks (optional)',
    subTrails: 'Big Mesa, Rocky Tops, Ramblin’',
    miles: '17',
    time: '3–4.5 hrs',
    distanceFromHome: '10.4 mi',
    features: 'Loop, intermediate friendly, scenic but busy',
    link: 'https://www.mtbproject.com/trail/7004599/navajo-rocks-loop',
    coords: [38.6053, -109.6104],
  },
];

const HomeCoords = [38.497356, -109.447840];

export default function MoabRideOptions() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">Moab Ride Options Overview</h1>

      <Card>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Main Trail</TableHead>
                <TableHead>Sub Trails</TableHead>
                <TableHead>Miles</TableHead>
                <TableHead>Time (Intermediate)</TableHead>
                <TableHead>Distance from Home</TableHead>
                <TableHead>Key Features</TableHead>
                <TableHead>MTBProject Link</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {trails.map((trail, idx) => (
                <TableRow key={idx}>
                  <TableCell>{trail.name}</TableCell>
                  <TableCell>{trail.subTrails}</TableCell>
                  <TableCell>{trail.miles}</TableCell>
                  <TableCell>{trail.time}</TableCell>
                  <TableCell>{trail.distanceFromHome}</TableCell>
                  <TableCell>{trail.features}</TableCell>
                  <TableCell>
                    <a href={trail.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                      Link
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-semibold">Trailhead Map</h2>
      <MapContainer center={HomeCoords} zoom={10} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={HomeCoords}>
          <Popup>Home Base</Popup>
        </Marker>
        {trails.map((trail, idx) => (
          <Marker key={idx} position={trail.coords}>
            <Popup>{trail.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
