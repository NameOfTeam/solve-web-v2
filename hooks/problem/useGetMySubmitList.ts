import {useEffect, useState} from "react";
import {SubmitData} from "@/types/problem/submit";
import {useInView} from "react-intersection-observer";
import {getMySubmits} from "@/api/problem/getMySubmits";

const useGetMySubmitList = (problemId?: string) => {
  const [data, setData] = useState<SubmitData[]>([]);
  const [loading, setLoading] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  
  const fetchData = async () => {
    if (loading || !problemId) return;
    setLoading(true);
    const newData = await getMySubmits(problemId, data[data.length - 1]?.id || 0);
    if(newData.length > 0) setData(prev=>([...prev, ...newData]));
    setLoading(false);
  }
  
  useEffect(() => {
    if(inView) {
      fetchData();
    }
  },[inView]);
  
  return {
    data,
    ref,
    loading,
  }
}

export default useGetMySubmitList;