import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
  createContext,
  useCallback,
  useContext,
  ReactNode,
  useState,
} from 'react';

type TrainingContextData = {
  handleSetItemLocation: (pos) => void;
  woukoutBd: any[];
  week: WeekProps;
  loadData: () => void;
  handleRemoveTraining: () => void;
  itemLocation:number;
}

type TrainingProviderProps = {
  children: ReactNode;
}
 
type WeekProps = {
  seg:string;
  ter:string; 
  qua:string; 
  qui:string; 
  sex:string; 
  sab:string;
}

const TrainingContext = createContext({} as TrainingContextData);

function TrainingProvider({ children }: TrainingProviderProps) {
  const [woukoutBd, setWoukoutBd] = useState([]);
  const [week, setWeek] = useState({seg:'', ter:'', qua:'', qui:'', sex:'', sab:''});
  const [itemLocation, setItemLocation]= useState(null);

  const handleSetItemLocation = useCallback((pos) => {
    setItemLocation(pos); 
  }, []);

  const loadData = async () => {
    try{
      const storageWorkouts = await AsyncStorage.getItem("@Academia:Workouts");
      setWoukoutBd(JSON.parse(storageWorkouts));
      const storageWeek = await AsyncStorage.getItem("@Academia:Week");
      setWeek(JSON.parse(storageWeek));
    }catch{

    }
  }
  const handleRemoveTraining = async () => {
    try{
      const id = woukoutBd[itemLocation].id;

      let workouts = woukoutBd; 
      workouts.splice(itemLocation,1);
      
      let weekBd = week;
      weekBd.seg = weekBd.seg === id ? '' : weekBd.seg;
      weekBd.ter = weekBd.ter === id ? '' : weekBd.ter;
      weekBd.qua = weekBd.qua === id ? '' : weekBd.qua;
      weekBd.qui = weekBd.qui === id ? '' : weekBd.qui;
      weekBd.sex = weekBd.sex === id ? '' : weekBd.sex;
      weekBd.sab = weekBd.sab === id ? '' : weekBd.sab;

      await AsyncStorage.setItem(
        "@Academia:Workouts",
        JSON.stringify(workouts)
      );

      await AsyncStorage.setItem(
        "@Academia:Week",
        JSON.stringify(weekBd)
      );
      
    }catch{

    }
  }

  return (
    <TrainingContext.Provider value={{
      woukoutBd,
      week,
      handleSetItemLocation,
      loadData,
      handleRemoveTraining,
      itemLocation
    }}>
      {children}
    </TrainingContext.Provider>
  )
}

function useTraining() {
  const context = useContext(TrainingContext);
  return context;
}

export {
  TrainingProvider,
  useTraining,
 
}