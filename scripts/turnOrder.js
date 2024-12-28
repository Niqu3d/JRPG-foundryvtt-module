export class TurnOrder {
  static getTurnOrder(actors) {
    return actors.sort((a, b) => {
      const aInit = a.getRollData().initiative.value || 0;
      const bInit = b.getRollData().initiative.value || 0;
      return bInit - aInit;
    });
  }
}
