import { useState } from "react";
import Radio from "../components/Radio";
import TextBox from "../components/TextBox";
import { defaultFormInput } from "../constants/AppConstants";
import SETTINGS_API from "../services/Settings";
import toast from "react-hot-toast";
import { BallTriangle } from "react-loader-spinner";
export default function SettingsForm() {
  const [data, setData] = useState(defaultFormInput);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    console.log(e.target.name);
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleFetchSettings = async () => {
    try {
      setLoading(true);
      const response = await SETTINGS_API.getSettings();
      console.log(response);
      setLoading(false);
      toast.success("Settings fetched");
    } catch (e) {
      setLoading(false);
      console.log(e);
      toast.error("Unable to get settings");
    }
  };
  const handleFetchSubmit = async () => {
    try {
      setLoading(true);
      const response = await SETTINGS_API.sendSettings(data);
      console.log(response);
      setLoading(false);
      toast.success("Settings saved successfully");
    } catch (e) {
      console.log(e);
      setLoading(false);
      toast.error("Unable to send settings");
    }
  };
  if (loading)
    return (
      <div className="w-screen flex flex-auto items-center justify-center ">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#1c4ed8"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </div>
    );
  return (
    <div className="border-[2px] border-blue-700 p-3 rounded-md  flex flex-col m-3 w-auto overflow-y-auto ">
      <form onSubmit={handleFetchSubmit}>
        <TextBox
          defaultValue={data["aodelay3p"]}
          name="aodelay3p"
          type="number"
          id="3PAutoOnDly"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          min={5}
          max={240}
          labelText="3P:Auto On Dly"
          placeholder="[5-240]Sec"
          required={true}
        />
        <TextBox
          defaultValue={data["aodelay2p"]}
          name="aodelay2p"
          type="number"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="[5-240]Sec"
          min={5}
          max={240}
          labelText="2P:Auto On Dly"
          required={true}
        />
        <TextBox
          defaultValue={data["sddelay"]}
          name="sddelay"
          type="number"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="[0-120]Sec"
          min={0}
          max={120}
          labelText="Star Delta Dly"
          required={true}
        />
        <TextBox
          defaultValue={data["overvolt"]}
          name="overvolt"
          type="number"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="[400-600]Voltage"
          min={400}
          max={600}
          labelText="Over Voltage"
          required={true}
        />
        <TextBox
          defaultValue={data["lowvolt"]}
          name="lowvolt"
          type="number"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="[100-380]Voltage"
          min={100}
          max={380}
          labelText="Low Voltage"
          required={true}
        />
        <TextBox
          defaultValue={data["dryrun3p"]}
          name="dryrun3p"
          type="number"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="[5-50]Amps"
          min={5}
          max={50}
          labelText="3P:Dry Run "
          required={true}
        />
        <TextBox
          defaultValue={data["drdelay"]}
          name="drdelay"
          type="number"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="[1-120]Sec"
          min={1}
          max={120}
          labelText="Dry Run Delay"
          required={true}
        />
        <TextBox
          defaultValue={data["drrt"]}
          name="drrt"
          type="number"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="[1-240]Mint"
          min={1}
          max={240}
          labelText="D/R Restart Time"
          required={true}
        />
        <TextBox
          defaultValue={data["ubtrip"]}
          name="ubtrip"
          type="number"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="[30-100]Voltage"
          min={30}
          max={100}
          labelText="Un-Balance Trip"
          required={true}
        />
        <div className="flex flex-row mb-6 items-center gap-1">
          <label
            htmlFor={"gsmc"}
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-10/12"
          >
            GSM Control
          </label>
          <div className="flex w-full justify-start gap-2 items-center">
            <Radio
              defaultChecked={data["gsmc"] === "Enabled"}
              value="Enabled"
              onChange={handleChange}
              name="gsmc"
              labelText="Enabled"
              id="gsmc_radio_1"
            />
            <Radio
              defaultChecked={data["gsmc"] === "Disabled"}
              value="Disabled"
              onChange={handleChange}
              name="gsmc"
              labelText="Disabled"
              id="gsmc_radio_2"
            />
          </div>
        </div>
        <TextBox
          defaultValue={data["ctratio"]}
          name="ctratio"
          type="number"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="[30-100]%"
          min={30}
          max={100}
          labelText="CT Ratio"
          required={true}
        />
        <div className="flex flex-row mb-6 items-center gap-1">
          <label
            htmlFor={"ctrl2p"}
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-10/12"
          >
            2 Phase Control
          </label>
          <div className="flex w-full justify-start gap-2 items-center">
            <Radio
              defaultChecked={data["ctrl2p"] === "Enabled"}
              value="Enabled"
              onChange={handleChange}
              name="ctrl2p"
              labelText="Enabled"
              id="ctrl2p_radio_1"
            />
            <Radio
              defaultChecked={data["ctrl2p"] === "Disabled"}
              value="Disabled"
              onChange={handleChange}
              name="ctrl2p"
              labelText="Disabled"
              id="ctrl2p_radio_2"
            />
          </div>
        </div>
        <TextBox
          defaultValue={data["oltrip"]}
          name="oltrip"
          type="number"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="[1-30]Sec"
          min={1}
          max={30}
          labelText="O/L  Trip"
          required={true}
        />
        <TextBox
          defaultValue={data["hlvtrip"]}
          name="hlvtrip"
          type="number"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="[1-30]Sec"
          min={1}
          max={30}
          labelText="H/L Volt Trip"
          required={true}
        />
        <TextBox
          defaultValue={data["podelay"]}
          name="podelay"
          type="number"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="[1-120]Sec"
          min={1}
          max={120}
          labelText="Power On Dly"
          required={true}
        />
        <TextBox
          defaultValue={data["kvaradd"]}
          name="kvaradd"
          type="number"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="[240-350]Voltage"
          min={240}
          max={350}
          labelText="KVAR Added"
          required={true}
        />
        <TextBox
          defaultValue={data["kvarremove"]}
          name="kvarremove"
          type="number"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="[350-420]Voltage"
          min={350}
          max={420}
          labelText="KVAR Remove"
          required={true}
        />
        <div className="flex flex-row mb-6 items-center gap-1">
          <label
            htmlFor={"kvaraddctrl"}
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-10/12"
          >
            KVAR Add Control
          </label>
          <div className="flex w-full justify-start gap-2 items-center">
            <Radio
              defaultChecked={data["gsmc"] === "Enabled"}
              value="Enabled"
              onChange={handleChange}
              name="kvaraddctrl"
              labelText="Enabled"
              id="kvaraddctrl_radio_1"
            />
            <Radio
              defaultChecked={data["gsmc"] === "Disabled"}
              value="Disabled"
              onChange={handleChange}
              name="kvaraddctrl"
              labelText="Disabled"
              id="kvaraddctrl_radio_2"
            />
          </div>
        </div>
        <TextBox
          defaultValue={data["drstartcnt"]}
          name="drstartcnt"
          type="number"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="[1-30]Nos"
          min={1}
          max={30}
          labelText="D/R Nos Start"
          required={true}
        />
        <TextBox
          defaultValue={data["dryrun2p"]}
          name="dryrun2p"
          type="number"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="[5-50]Amps"
          min={5}
          max={50}
          labelText="2P:Dry Run"
          required={true}
        />
        <div className="w-full flex flex-row justify-end gap-2">
          <div className="cursor-pointer" onClick={handleFetchSettings}>
            <button
              type="button"
              className="  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Fetch
            </button>
          </div>
          <div className="cursor-pointer">
            <button
              type="submit"
              className="  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
