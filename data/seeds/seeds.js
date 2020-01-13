
exports.seed = function(knex) {
  return knex('projects').truncate()
  .then(() => knex('resources').truncate())
  .then(() => knex('tasks').truncate())
  .then(() => knex('projects_resources').truncate())

  .then(() => {
    return knex('projects').insert([
      { id: 1, name: 'Alpha001', description: 'defend southern and western ridges', completed: false },
      { id: 2, name: 'Bravo002', description: 'defend northern plain', completed: false },
      { id: 3, name: 'Charlie003', description: 'defend east river', completed: false },
      { id: 4, name: 'Delta004', description: 'prepare support and QRF - HQ and counter-attacking force', completed: false },
    ])
  })

  .then(() => {
    return knex('resources').insert([
      { id: 1, name: '1st_platoon-001', description: 'Light infantry platoon' },
      { id: 2, name: '2nd_platoon-002', description: 'Light infantry platoon' },
      { id: 3, name: '3rd_platoon-003', description: 'Light infantry platoon' },
      { id: 4, name: '4th_platoon-004', description: 'Light infantry platoon' },
      { id: 5, name: 'mortar_team_1_005', description: '81mm mortar team - 3 person' },
      { id: 6, name: 'mortar_team_2_006', description: '81mm mortar team - 3 person' },
      { id: 7, name: 'recon_team_1_007', description: 'Recon and surveillance team - 3 person' },
      { id: 8, name: 'recon team_2_008', description: 'Recon and surveillance team - 3 person' }
    ])
  })

  .then(() => {
    return knex('tasks').insert([
      { id: 1, description: 'scout ridges', notes: 'Ensure all means of approaching the ridgelines from below are discovered and accounted for', project_id: 1, completed: false },
      { id: 2, description: 'Construct defensive positions on ridgeline', notes: 'Soil is too rocky to dig, use loose rocks', project_id: 1, completed: false },
      { id: 3, description: 'Construct defensive positions along northern front', notes: 'Dig foxholes', project_id: 2, completed: false },
      { id: 4, description: 'Scout approaches from north', notes: 'Ensure all potential defilade areas are discovered', project_id: 2, completed: false },
      { id: 5, description: 'Construct defensive positions along river', notes: 'Use fallen tree and lumber piles. Water table is high in this area', project_id: 3, completed: false },
      { id: 6, description: 'Prepare ambush along river road', notes: 'Prepare L-shaped ambush at the river crossing ', project_id: 3, completed: false },
      { id: 7, description: 'Prepare indirect fire plan', notes: 'Place mortar teams and pre-sight targeted areas', project_id: 4, completed: false },
      { id: 8, description: 'Prepare supply caches', notes: 'Gather and place ammunition and other supplies so they can be rapidly distributed to defensive positions in event of attack ', project_id: 4, completed: false },
    ])
  })

  .then(() => {
    return knex('projects_resources').insert([
      { project_id: 1, resource_id: 1 },
      { project_id: 1, resource_id: 7 },
      { project_id: 1, resource_id: 5 },
      { project_id: 2, resource_id: 2 },
      { project_id: 2, resource_id: 8 },
      { project_id: 2, resource_id: 6 },
      { project_id: 3, resource_id: 3 },
      { project_id: 3, resource_id: 4 },
      { project_id: 3, resource_id: 8 },
      { project_id: 4, resource_id: 4 },
      { project_id: 4, resource_id: 5 },
      { project_id: 4, resource_id: 1 }
    ])
  })
};
