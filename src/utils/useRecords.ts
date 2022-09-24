import { useState, useEffect } from "react";
import { Record } from "./type";

const LOCAL_STORAGE_KEY_RECORDS = "records";

export const useRecords = () => {
  const [records, setRecords] = useState<Record[]>([]);

  useEffect(() => {
    const records = localStorage.getItem(LOCAL_STORAGE_KEY_RECORDS);
    if (records) {
      try {
        setRecords(JSON.parse(records));
      } catch (error) {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_RECORDS, JSON.stringify(records));
  }, [records]);

  return { records, setRecords };
};
