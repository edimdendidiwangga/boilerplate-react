import React from 'react'
import {connect} from 'react-redux'
// import { Router } from '../../routes'
// Components
class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div>Hello world</div>
    )
  }
}

const mapStateToProps = (state) => ({
  // company: state.company,
  // campaigns: state.campaigns
})
const mapDispatchToProps = (dispatch) => ({
  // listCampaigns: (data) => dispatch(CampaignsActions.campaignsRequest(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
