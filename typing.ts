export type menuIconType ={
   id:number,
   Icon:any,
   href:string
}

export type categoryItemsType = {
   id:number,
   src:any,
   query:string,
   name:string
}



export type PropsStepTwo = {
   location: {
     province: {Name:string};
     state: {Name:string};
     city: {Name:string};
   };
   setLocation: React.Dispatch<
     React.SetStateAction<{
       province: {Name:string};
       state: {Name:string};
       city: {Name:string};
     }>
   >;
   countMessage:number | undefined,
   setCountMessage: React.Dispatch<React.SetStateAction<number | undefined>>
   setStep:React.Dispatch<React.SetStateAction<number>>
 };
export type PropsLocation = {
   location: {
     province: {Name:string};
     state: {Name:string};
     city: {Name:string};
   };
   setLocation: React.Dispatch<
     React.SetStateAction<{
       province: {Name:string};
       state: {Name:string};
       city: {Name:string};
     }>
   >;
   open:boolean
   setOpen:React.Dispatch<React.SetStateAction<boolean>>
 };


 export type typeStepThree = {
  message: {
    title: string;
    text: string;
  };
  location: {
    province: { Name: string };
    state: { Name: string };
    city: { Name: string };
  };
  countMessage: number | undefined;
  setStep: React.Dispatch<React.SetStateAction<number>>
};