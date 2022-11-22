import { useState, useEffect } from "react";
import Provinces from "../../public/listCitys/provincelists.json";
import States from "../../public/listCitys/states.json";
import Citys from "../../public/listCitys/cities.json";
import { GoLocation } from "react-icons/go";
import { Dialog } from "@mui/material";
import Card from "./Card";
import CardBackBtn from "./CardBackBtn";
import { PropsLocation } from "../../typing";

export default function Location({
  open,
  setOpen,
  location,
  setLocation,
}: PropsLocation) {
  const [list, setList] = useState(Provinces);
  const [count, setCount] = useState(0);
  const [address, setAddress] = useState<any | []>([]);

  const handleClose = () => {
    setCount(0);
    setList(Provinces);
    setOpen(!open);
  };

  useEffect(() => {
    if (count === 3) {
      setLocation({
        province: address[0],
        state: address[1],
        city: address[2],
      });
      setAddress([]);
      handleClose();
    }
  }, [count]);

  const clickProvince = async (item: any) => {
    await setAddress([...address, item]);
    setCount((prev) => prev + 1);
    if (count === 0) {
      let newList = States.filter(
        (i: any) => i.IdOstan === item._id
      );
      setList([...newList]);
    } else if (count === 1) {
      let newList = Citys.filter(
        (i: any) => i.IdOstan === item._id
      );
      setList([...newList]);
    }
  };

  const filterItem = (a: any, b: any) => {
    if (a.Name < b.Name) {
      return -1;
    }
    if (a.Name > b.Name) {
      return 1;
    }

    // names must be equal
    return 0;
  };

  const backListProvince = () => {
    setCount(0);
    setAddress([]);
    setList(Provinces);
  };

  const backListState = () => {
    setCount(1);
    let newList = States.filter(
      (i: any) => i.IdOstan === address[0]._id
    );
    setList([...newList]);
  };
  return (
    <div>
      <Dialog
        fullWidth={true}
        maxWidth="xs"
        open={open}
        onClose={handleClose}
        className="!z-[9999999]"
      >
        <div>
          <div className="flex items-center py-4 gap-3 text-gray-700 border-b shadow-md mb-2 border-gray-200/20 justify-center">
            <GoLocation size={24} />
            <h3 className="bold text-sm text-center  ">
              لطفا آدرس محل سکونت خود را انتخاب کنید
            </h3>
          </div>
          {count === 1 ? (
            <CardBackBtn
              name=" بازگشت به لیست استان ها"
              onClick={backListProvince}
            />
          ) : null}
          {count === 2 ? (
            <CardBackBtn
              name=" بازگشت به لیست شهرستان ها"
              onClick={backListState}
            />
          ) : null}
          {list
            .sort((a, b) => filterItem(a, b))
            .map((item: any, index: any) => {
              return (
                <Card
                  onClick={() => clickProvince(item)}
                  item={item}
                  key={index}
                />
              );
            })}
        </div>
      </Dialog>
    </div>
  );
}
