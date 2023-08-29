function sortCarByYearAscendingly(cars) {
  // Clone array untuk menghindari side-effect
  const result = [...cars];

  // Implementasi manual sorting secara ascending menggunakan algoritma bubble sort
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      if (result[j].year > result[j + 1].year) {
        // Tukar posisi jika tahun mobil sekarang lebih besar dari tahun mobil berikutnya
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  // console.log(result)
  return result;
}



// ini array buat tes function
//=====================

const car = [{
  "available": true,
  "id": "0d5de078-a5fc-456b-9487-47eb450a01c6",
  "manufacture": "Buick",
  "model": "LaCrosse",
  "options": [
    "CD (Multi Disc)",
    "Keyless Entry",
    "Cassette Player",
    "Power Windows",
    "Rear Window Wiper",
    "CD (Single Disc)",
    "Third Row Seats"
  ],
  "plate": "STL-7347",
  "specs": [
    "Rear reading & courtesy lamps",
    "Zone body construction -inc: front/rear crumple zones, hood deformation point",
    "4-wheel/4-channel anti-lock brake system (ABS)",
    "Anti-lock 4-wheel performance disc brakes",
    "200mm front axle",
    "Dual front knee airbags"
  ],
  "transmission": "Automatic",
  "type": "Extended Cab Pickup",
  "year": 2012
},
{
  "available": false,
  "id": "950575d6-958c-422e-a46b-c3ed2e1315ed",
  "manufacture": "Audi",
  "model": "A4",
  "options": [
    "Navigation",
    "Rear Window Wiper",
    "Tow Package",
    "MP3 (Multi Disc)",
    "Bucket Seats"
  ],
  "plate": "MRQ-2982",
  "specs": [
    "Pwr accessory delay",
    "Tire pressure monitoring system (TPMS)",
    "Tilt/telescoping steering column",
    "Electronic throttle control system w/intelligence (ETCS-i)",
    "Front/rear crumple zones",
    "Rear door child safety locks",
    "Child safety rear door locks"
  ],
  "transmission": "Automatic",
  "type": "Crew Cab Pickup",
  "year": 2012
},
{
  "available": false,
  "id": "b89117fc-69e1-4366-ba21-9d6a0b2bfb04",
  "manufacture": "Dodge",
  "model": "Durango",
  "options": [
    "Memory Seats",
    "Integrated Phone",
    "Airbag: Driver",
    "Leather Interior",
    "Cassette Player",
    "Airbag: Passenger"
  ],
  "plate": "ACT-6027",
  "specs": [
    "Floor carpeting",
    "Electric speed-sensitive variable-assist pwr steering",
    "Dana 44/226mm rear axle",
    "Roof mounted antenna",
    "Fixed long mast antenna"
  ],
  "transmission": "Manual",
  "type": "SUV",
  "year": 2013
}]


const sortedCars = sortCarByYearAscendingly(car);
console.log(sortedCars);
