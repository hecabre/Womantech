import { createContext, useContext, useState } from "react";
import {
  getUniversity,
  getIPNUniversity,
  getUAMUniversity,
  getUNAMUniversity,
  getCareerByid,
} from "../api/university";
import { getFacultyByIdIpn } from "../api/ipn";

export const UniversityContext = createContext();

export const useUniversity = () => {
  const context = useContext(UniversityContext);
  if (!context) throw new Error("Use unversity must be used within context");
  return context;
};

export const UniversitysProvider = ({ children }) => {
  const [allUniversitys, setAllUniversitys] = useState(null);
  const [allIPN, setAllIPN] = useState(null);
  const [allUNAM, setAllUNAM] = useState(null);
  const [allUAM, setAllUAM] = useState(null);
  const [allCHAPINGO, setAllCHAPINGO] = useState([]);
  const [university, setUniversity] = useState(null);

  const listUniversitys = async () => {
    const response = await getUniversity();
    setAllUniversitys(response.data.universitys);
    return response;
  };
  const listUniversitysIPN = async () => {
    const response = await getIPNUniversity();
    setAllIPN(response.data);
    return response;
  };
  const listUniversitysUAM = async () => {
    const response = await getUAMUniversity();
    setAllUAM(response.data);
    return response;
  };
  const listUniversitysUNAM = async () => {
    const response = await getUNAMUniversity();
    setAllUNAM(response.data);
    return response;
  };
  const listCarrerById = async (id) => {
    const response = await getCareerByid(id);
    setUniversity(response.data);
    return response;
  };
  const facultyByIdIpn = async (id) => {
    const response = await getFacultyByIdIpn(id);
    setAllIPN(response.data.faculty);
  };
  return (
    <UniversityContext.Provider
      value={{
        listUniversitys,
        listUniversitysIPN,
        listUniversitysUAM,
        listUniversitysUNAM,
        allUniversitys,
        listCarrerById,
        facultyByIdIpn,
        university,
        allIPN,
      }}
    >
      {children}
    </UniversityContext.Provider>
  );
};
