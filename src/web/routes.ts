import { Router, Request, Response } from "express";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send(
    '<body bgcolor="black">' +
      '<h1 style="margin: 80px 80px 0px 80px">' +
      '<font color="#ffffff">' +
      "ll" +
      "</font>" +
      "</h1>" +
      '<p style="margin: 20px 0px 0px 80px">' +
      '<font color="#ffffff">' +
      "B, server running" +
      "</font>" +
      "</p>" +
      "</body>"
  );
});

export default router;
