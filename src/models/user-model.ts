export interface IUser {
    lastName:   string;
    role:       string;
    gender:     string;
    university: string;
    maidenName: string;
    ein:        string;
    ssn:        string;
    bloodGroup: string;
    password:   string;
    hair:       Hair;
    bank:       Bank;
    eyeColor:   string;
    company:    Company;
    id:         number;
    email:      string;
    height:     number;
    image:      string;
    address:    Address;
    ip:         string;
    weight:     number;
    userAgent:  string;
    birthDate:  string;
    crypto:     Crypto;
    firstName:  string;
    macAddress: string;
    phone:      string;
    age:        number;
    username:   string;
}

export interface Address {
    country:     string;
    address:     string;
    city:        string;
    postalCode:  string;
    coordinates: Coordinates;
    stateCode:   string;
    state:       string;
}

export interface Coordinates {
    lng: number;
    lat: number;
}

export interface Bank {
    iban:       string;
    cardExpire: string;
    cardType:   string;
    currency:   string;
    cardNumber: string;
}

export interface Company {
    address:    Address;
    name:       string;
    department: string;
    title:      string;
}

export interface Crypto {
    wallet:  string;
    coin:    string;
    network: string;
}

export interface Hair {
    color: string;
    type:  string;
}
