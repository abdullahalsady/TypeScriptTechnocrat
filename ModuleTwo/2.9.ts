{
    // Conditional Types
    type a1 = null;
    type b1 = null;

    type x = a1 extends null ? true : false; // simple conditional type
    type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
        track: string;
    }

    // does he have bike / car / ship
    type checkVehicle<T> = T extends keyof Sheikh ? true : false;
    type hasTrack = checkVehicle<"track">
}