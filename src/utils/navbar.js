import React from 'react'

class Navbar extends React.Component{
	render(){
		return (
			<div className="navbar" height='50'>
				<ul>
					<li className="imgItem">
						<div className="imgBgd">
							<img alt="" className="imgLogo" src="../brand.png" width='40' height='40' />
						</div>
					</li>
					<li>
						<span className="brand">ReactLyrics</span>
					</li>
				</ul>
			</div>
		)
	}
}


export default Navbar;