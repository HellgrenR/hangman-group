import { appendFileSync } from "node:fs"

export default class Player {

  constructor(name) {
    this.name = name
    appendFileSync("players.txt", `Player: ${name}\n`, "utf-8")
  }

}




