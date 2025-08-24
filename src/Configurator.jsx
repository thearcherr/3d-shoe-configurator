import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";
import useColor from "./store/useColor";

export default function Configurator() {
  const color = useColor((state) => state.color);
  const setColor = useColor((state) => state.setColor);

    const colorLaces = useColor((state) => state.colorLaces)
  const setColorLaces = useColor((state) => state.setColorLaces);

  const colorStripes = useColor((state) => state.colorStripes)
  const setColorStripes = useColor((state) => state.setColorStripes);

  const colorSole = useColor((state) => state.colorSole)
    const setColorSole = useColor((state) => state.setColorSole);
    
    const price = useColor((state) => state.price);
    const setPrice = useColor((state) => state.setPrice);

  const [lacesOpen, setOpenLaces] = useState(false);
  const [stripesOpen, setOpenStripes] = useState(false);
  const [soleOpen, setOpenSole] = useState(false);

  const nightView = useColor((state) => state.nightView);
  const setNightView = useColor((state) => state.setNightView);

  const [panel, setPanel] = useState(null);

  useEffect(() => {
    if (panel === "laces") {
      setOpenStripes(false);
      setOpenSole(false);
    } else if (panel === "stripes") {
      setOpenLaces(false);
      setOpenSole(false);
    } else if (panel === "soles") {
      setOpenLaces(false);
      setOpenStripes(false);
    }
  }, [panel]);
    
    useEffect(() => {
        const newPrice = Math.floor(Math.random() * (100 - 75 + 1)) + 75; 
        setPrice(newPrice);
    }, [colorLaces, colorStripes, colorSole, setPrice]);

  return (
    <div className="container absolute top-0 right-0 w-1/4 h-screen bg-white overflow-y-auto z-50">
      <div className="flex flex-row items-center w-fit">
        <input onClick={() => setNightView(!nightView)} type="checkbox" checked={nightView} className="mx-2" />
        <p className="px-2 font-thin text-md">NightView</p>
      </div>

      <p className="p-4 font-thin text-2xl">Upper</p>
      <div className="mt-2">
        <HexColorPicker
          className="max-h-36 mx-auto"
          color={color}
          onChange={setColor}
        />
      </div>

      <Accordion
        title="Laces"
        open={lacesOpen}
        setOpen={() =>
          setOpenLaces((prev) => {
            const newVal = !prev;
            setPanel(newVal ? "laces" : null);
            return newVal;
          })
        }
      >
        <div className="flex flex-row gap-4 mx-auto">
          <ColorBox setColor={setColorLaces} color="#E0E0E0" />
          <ColorBox setColor={setColorLaces} color="blue" />
          <ColorBox setColor={setColorLaces} color="#006633" />
          <ColorBox setColor={setColorLaces} color="black" />
          <ColorBox setColor={setColorLaces} color="#990000" />
          <ColorBox setColor={setColorLaces} color="#cccc00" />
        </div>
      </Accordion>

      <Accordion
        title="Stripes"
        open={stripesOpen}
        setOpen={() =>
          setOpenStripes((prev) => {
            const newVal = !prev;
            setPanel(newVal ? "stripes" : null);
            return newVal;
          })
        }
      >
        <div className="flex flex-row gap-4 mx-auto">
          <ColorBox setColor={setColorStripes} color="#E0E0E0" />
          <ColorBox setColor={setColorStripes} color="blue" />
          <ColorBox setColor={setColorStripes} color="#006633" />
          <ColorBox setColor={setColorStripes} color="black" />
          <ColorBox setColor={setColorStripes} color="#990000" />
          <ColorBox setColor={setColorStripes} color="#cccc00" />
        </div>
      </Accordion>

      <Accordion
        title="Soles"
        open={soleOpen}
        setOpen={() =>
          setOpenSole((prev) => {
            const newVal = !prev;
            setPanel(newVal ? "soles" : null);
            return newVal;
          })
        }
      >
        <div className="flex flex-row gap-4 mx-auto">
          <ColorBox setColor={setColorSole} color="#E0E0E0" />
          <ColorBox setColor={setColorSole} color="blue" />
          <ColorBox setColor={setColorSole} color="#006633" />
          <ColorBox setColor={setColorSole} color="black" />
          <ColorBox setColor={setColorSole} color="#990000" />
          <ColorBox setColor={setColorSole} color="#cccc00" />
        </div>
      </Accordion>
          
      <div className="mt-4 flex flex-col">
        <p className="text-2xl font-semibold p-2"> ${price} </p>
              <button className="border p-2 mt-2 bg-blue-500 text-white font-semibold rounded-lg cursor-pointer">Add To Cart</button>
          </div>
    </div>
  );
}

// No changes needed for this component. It works great!
function Accordion({ title, open, setOpen, children }) {
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="z-50">
      <div
        className="p-4 border-b border-gray-200 flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        <p className="font-thin text-2xl">{title}</p>
        <span className="text-3xl select-none">{open ? "-" : "+"}</span>
      </div>
      {open && <div className="p-4 border-b border-gray-200">{children}</div>}
    </div>
  );
}

function ColorBox({ color, setColor }) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
      setClicked(!clicked);
      setColor(color);
  }

  return (
    <div
      style={{ backgroundColor: color }}
      onClick={handleClick}
      className={`w-8 h-8 bg-gray-200 rounded-full cursor-pointer hover:scale-105 transition-transform`}
    ></div>
  );
}
