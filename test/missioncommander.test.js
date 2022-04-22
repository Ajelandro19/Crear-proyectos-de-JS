const MissionCommander = require('./../app/missioncommander');
describe("Unit Tests for Mission Commander Class", () => {
    test('1) Create a mission commander objet', () => {
        const myMissionCommander = new MissionCommander("Ajelandro")
        expect(myMissionCommander.name).toBe("Ajelandro");
    });
  })
  