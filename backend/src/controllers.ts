import { Request, Response } from 'express';
import { PartnerData } from './types';

let partners: PartnerData = {
    "sftt": {
      "thumbnailUrl": "https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/sfft-project-page.png",
      "name": "Speak For The Trees",
      "description": "Speak for the Trees Boston aims to improve the size and health of the urban forest in the greater Boston area, with a focus on under-served and under-canopied neighborhoods. They work with volunteers to inventory (collect data) trees, plant trees, and educate those about trees. C4C has built a tree stewardship application for SFTT that allows users to participate in conserving Boston's urban forest. Across Boston, hundreds of trees have been adopted and cared for.",
      "active": true
    }
  };

// Endpoint to get all partners
export const getAllPartners = (_req: Request, res: Response) => {
    const partnersArray = Object.values(partners);
    res.status(200).json(partnersArray);
  };

// Endpoint to add a partner
export const addPartner = (req: Request, res: Response) => {
    const { key, name, thumbnailUrl, description, active } = req.body;
    if (!key || !name || !thumbnailUrl || !description || active === undefined) {
        return res.status(400).json({ error: "All fields are needed! "});
    }
    partners[key] = { name, thumbnailUrl, description, active };
    res.status(201).json(partners[key]);
};

// Endpoint to delete a partner
export const removePartner = (req: Request, res: Response) => {
    const { key } = req.params;
    if (!partners[key]) {
        return res.status(400).json({ error: "No partner found" });
    }
    delete(partners[key]);
    res.status(200).json({ message: `Partner deleted, Goodbye ${ key }!` });
};



