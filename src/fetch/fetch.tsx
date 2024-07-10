"use server";

import Photo from "@/components/ui/Photo";
import { APODFullUrl } from "@/constants/constants";
import { APODResponse, APODSchema, APODsSchema } from "@/types/types";

export async function fetchAPODImage(): Promise<APODResponse> {
  try {
    const res = await fetch(APODFullUrl);
    if (!res.ok) {
      throw Error("Error when fetching APODImage: Not ok from fetch's resposne")
    }

    const data = await res.json();
    const validatedData = APODSchema.parse(data);
    return {
      message: "Succuessful fetching APODImage",
      result: validatedData,
    };
  } catch(error) {
    throw Error("Error when fetching APODImage: " + error);
  }
}

export async function fetchAPODImageByDate(date: string): Promise<APODResponse> {
  try {
    const res = await fetch(APODFullUrl + "&date=" + date);
    if (!res.ok) {
      throw Error("Error when fetching APODImage: Not ok from fetch's resposne")
    }

    const data = await res.json();
    const validatedData = APODSchema.parse(data);
    return {
      message: "Succuessful fetching APODImage",
      result: validatedData,
    };
  } catch(error) {
    throw Error("Error when fetching APODImage: " + error);
  }
}

export async function fetchAPODImages({
  startDate,
  endDate,
}: {
  startDate: string,
  endDate: string,
}) {
  try {
    const fullUrlToFetch = APODFullUrl + "&start_date=" + startDate + "&end_date=" + endDate;

    const res = await fetch(fullUrlToFetch);
    if (!res.ok) {
      throw Error("Error when fetching APODsImage: Not ok from fetch's response");
    }
    
    const data = await res.json();
    const validatedData = APODsSchema.parse(data);

    return validatedData.map((r, index) => (
      <Photo key={r.url} photo={r} index={index} />
    ))
  } catch(error) {
    throw Error("Error when fetching APODsImage: " + error);
  }
}
