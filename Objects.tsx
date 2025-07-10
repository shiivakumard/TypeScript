const userDetails =
{
  name: "John Doe",
  age: 30,
  email: "EMAIL",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345"
  },
  phoneNumbers: [
    {
      type: "home",
      number: "555-555-5555" 
    } 
  ]
}

function displayDetails(user: {
  name: string;
  age: number;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  phoneNumbers: { type: string; number: string }[];
}) {
  console.log(`Name: ${user.name}`);
  console.log(`Age: ${user.age}`);
  console.log(`Email: ${user.email}`);
  console.log(`Address: ${user.address.street}, ${user.address.city}, ${user.address.state} ${user.address.zip}`);
  
  user.phoneNumbers.forEach(phone => {
    console.log(`Phone (${phone.type}): ${phone.number}`);
  });
}
displayDetails(userDetails);


type User = {
  name: string;
    age: number;
    email: string;
}

function displayDetailsWithType(user: User): void {
  // This function takes a User type object and logs its details
  console.log(`Name: ${user.name}`);
  console.log(`Age: ${user.age}`);
  console.log(`Email: ${user.email}`);
}   

type Address = {
  street: string;
    city: string;

    state: string;
 readonly pincode: string; // Pincode is readonly, it cannot be changed after initialization
}

let address: Address = {
  street: "123 Main St",
  city: "Anytown",
  state: "CA",
    pincode: "12345"
    };




