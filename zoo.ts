interface IFeatures {
    id: number;
    typeName: string;
    requiredBiom: string;
    needReservoir: boolean;
    area: number;
    nutrition: string;
    type: string;
  }
  
  interface IAnimal {
    name: string;
    age: number;
    amountFood: number;
    features: IFeatures;
  }
  
  interface ISettElement {
    id: number;
    animals: IAnimal[];
    biom: string;
    space: number;
    animalType: string;
    reservoir: boolean;
  }
  


  
  const lionFeatures: IFeatures = {
    id: 1,
    typeName: "Lion",
    requiredBiom: "Savanna",
    needReservoir: true,
    area: 1000,
    nutrition: "Carnivore",
    type: "Mammal"
  };
  
  const lion: IAnimal = {
    name: "Simba",
    age: 5,
    amountFood: 10,
    features: lionFeatures
  };
  



  const tigerFeatures: IFeatures = {
    id: 2,
    typeName: "Tiger",
    requiredBiom: "Rainforest",
    needReservoir: true,
    area: 1200,
    nutrition: "Carnivore",
    type: "Mammal"
  };
  
  const tiger: IAnimal = {
    name: "Shere Khan",
    age: 8,
    amountFood: 12,
    features: tigerFeatures
  };
  



  const savannaCage: ISettElement = {
    id: 1,
    animals: [],
    biom: "Savanna",
    space: 5000,
    animalType: "Mammal",
    reservoir: true
  };
  
  const rainforestCage: ISettElement = {
    id: 2,
    animals: [],
    biom: "Rainforest",
    space: 6000,
    animalType: "Mammal",
    reservoir: true
  };
  


  function chooseAnimal(animal: IAnimal, cage: ISettElement): boolean {
    if (cage.biom !== animal.features.requiredBiom) {
      return false;
    }
    if (cage.reservoir !== animal.features.needReservoir) {
      return false;
    }
    if (cage.space < animal.features.area) {
      return false;
    }
    return true;
  }
  
  function canLiveTogether(animal1: IAnimal, animal2: IAnimal): boolean {
    if (animal1.features.requiredBiom !== animal2.features.requiredBiom) {
      return false;
    }
    if (animal1.features.needReservoir !== animal2.features.needReservoir) {
      return false;
    }
    if (animal1.features.type !== animal2.features.type) {
      return false;
    }
    return true;
  }
  
  
  console.log(chooseAnimal(lion, savannaCage));
  console.log(chooseAnimal(tiger, savannaCage));
  console.log(canLiveTogether(lion, tiger));