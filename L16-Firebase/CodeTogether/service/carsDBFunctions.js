import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDoc, doc, deleteDoc, addDoc, getDocs, updateDoc } from "firebase/firestore";

const firebaseConfig = {
  };

  const firebaseapp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseapp);
  const carsCollection = collection(db, 'cars');

const getCars = async () => {
    let carsQueryDocs = await getDocs(carsCollection);
    let cars = carsQueryDocs.docs.map(doc => {
        let data = doc.data();
        data.docID = doc.id;
        return data;
    })
    return cars;
}

const getCar = async (id) => {
    const docRef = doc(db, 'cars', id);
    const carsQueryDoc = await getDoc(docRef);
    let car = carsQueryDoc.data();
    car.docID = carsQueryDoc.id;
    return car;
}

const deleteCar = async (id) => {
    const deleteCar = await deleteDoc(doc(db, 'cars', id));
}

const addCar = async (brand, model) => {
    const car = {
        brand: brand,
        model: model
    };
    const docRef = await addDoc(carsCollection, car);
    return docRef.id;
}

const editCar = async (car) => {
    await updateDoc(doc(db, 'cars', car.carID), {
        brand: car.brand,
        model: car.model
    })
}

export default {getCars, getCar, deleteCar, addCar, editCar};