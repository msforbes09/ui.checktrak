export default {
  check: {},
  checks: [],
  transmittals: [],
  cancelling: false,
  claiming: false,
  clearing: false,
  creating: false,
  deleting: false,
  editing: false,
  loading: false,
  receiving: false,
  returning: false,
  transmitting: false,
  newCheck: { date: new Date().toISOString().substr(0, 10) },
  selectedChecks: [],
  showCancel: false,
  showCheck: false,
  showClaim: false,
  showClear: false,
  showCreate: false,
  showDelete: false,
  showEdit: false,
  showReceive: false,
  showReturn: false,
  showTransmit: false,
  waiting: false
}
