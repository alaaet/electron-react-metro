
function Window() {
  return (
    <div className="window">
      <nav
        data-role="ribbonmenu"
        data-role-ribbonmenu="true"
        className="ribbon-menu"
      >
        <div className="titlebar">
          <ul className="h-menu menu-holder">
            <li>
              <a href="#" className="dropdown-toggle">
                <span className="mif-apps icon"></span>
              </a>
              <ul className="d-menu" data-role="dropdown">
                <li>
                  <a href="#">Windows</a>
                </li>
                <li>
                  <a href="#">Skype</a>
                </li>
                <li className="divider"></li>
                <li>
                  <a href="#">Office</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="tabs-holder">
            <li className="static">
              <a href="#file">File</a>
            </li>
            <li className="active">
              <a href="#section_main">Main</a>
            </li>
            <li>
              <a href="#section_buttons">Buttons</a>
            </li>
            <li>
              <a href="#section_inputs">Inputs</a>
            </li>
          </ul>

          <div className="windowTitle">
            <span>Window Name</span>
          </div>
        </div>

        <div className="content-holder">
          <div className="section active" id="section_main">
            <div className="group">
              <button type="button" className="ribbon-button">
                <span className="icon">
                  <img src="images/share.svg" />
                </span>
                <span className="caption">Share</span>
              </button>
              <button className="ribbon-button">
                <span className="icon">
                  <img src="images/email.svg"></img>
                </span>
                <span className="caption">Email</span>
              </button>
              <div>
                <button className="ribbon-button dropdown-toggle">
                  <span className="icon">
                    <span className="mif-file-zip fg-cyan"></span>
                  </span>
                  <span className="caption">Compress</span>
                </button>
                <ul
                  className="ribbon-dropdown"
                  data-role="dropdown"
                  data-duration="100"
                  data-role-dropdown="true"
                  style={{ display: 'none' }}
                >
                  <li className="checked">
                    <a href="#">Modification</a>
                  </li>
                  <li className="checked">
                    <a href="#">Type</a>
                  </li>
                  <li className="checked">
                    <a href="#">Size</a>
                  </li>
                  <li>
                    <a href="#">Creating</a>
                  </li>
                  <li>
                    <a href="#">Authors</a>
                  </li>
                  <li className="checked-one">
                    <a href="#">Tags</a>
                  </li>
                  <li>
                    <a href="#">Names</a>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <a href="#">Columns...</a>
                  </li>
                </ul>
              </div>
              <div className="group-divider"></div>
              <div
                className="ribbon-toggle-group button-group"
                data-role-buttongroup="true"
                data-role="buttongroup"
                style={{ width: '188px' }}
              >
                <button className="ribbon-icon-button">
                  <span className="icon">
                    <span className="mif-list"></span>
                  </span>
                  <span className="caption">List</span>
                </button>

                <button className="ribbon-icon-button">
                  <span className="icon">
                    <span className="mif-apps"></span>
                  </span>
                  <span className="caption">Content</span>
                </button>

                <button className="ribbon-icon-button">
                  <span className="icon">
                    <span className="mif-table"></span>
                  </span>
                  <span className="caption">Icons</span>
                </button>

                <button className="ribbon-icon-button">
                  <span className="icon">
                    <span className="mif-image"></span>
                  </span>
                  <span className="caption">Small icons</span>
                </button>

                <button className="ribbon-icon-button">
                  <span className="icon">
                    <span className="mif-images"></span>
                  </span>
                  <span className="caption">Large icons</span>
                </button>

                <button className="ribbon-icon-button">
                  <span className="icon">
                    <span className="mif-windows"></span>
                  </span>
                  <span className="caption">Tiles</span>
                </button>
              </div>

              <span className="title">ribbon controls</span>
            </div>
          </div>

          <div className="section" id="section_buttons">
            <div className="group flex-column">
              <button className="button">Button</button>
              <button className="button primary">Button</button>

              <span className="title">Buttons</span>
            </div>
            <div className="group flex-column">
              <div className="toolbar">
                <button className="tool-button">
                  <span className="mif-floppy-disk"></span>
                </button>
                <button className="tool-button">
                  <img src="images/checkmark.png" />
                </button>
                <button className="tool-button text-button">Open</button>
              </div>
              <div className="toolbar mt-1">
                <button className="tool-button primary">
                  <span className="mif-floppy-disk"></span>
                </button>
                <button className="tool-button info">
                  <span className="mif-printer"></span>
                </button>
                <button className="tool-button success text-button">
                  Open
                </button>
              </div>

              <span className="title">Tool bars</span>
            </div>
            <div className="group">
              <button className="shortcut">
                <span className="caption">Rocket</span>
                <span className="mif-rocket icon"></span>
              </button>
              <button className="shortcut primary">
                <span className="tag">10</span>
                <span className="caption">Rocket</span>
                <span className="mif-rocket icon"></span>
              </button>
              <button className="shortcut secondary outline">
                <span className="tag">10</span>
                <span className="caption">Rocket</span>
                <span className="mif-rocket icon"></span>
              </button>

              <span className="title">Shortcuts</span>
            </div>
            <div className="group">
              <span className="title">All others...</span>
            </div>
          </div>

          <div className="section" id="section_inputs">
            <div className="group flex-column" style={{ width: '220px' }}>
              <div className="input">
                <input
                  data-role="input"
                  data-prepend="<span className='mif-envelop'>"
                  data-role-input="true"
                  type="text"
                  className=""
                />
                <div className="button-group">
                  <button className="button input-clear-button" type="button">
                    <span className="default-icon-cross"></span>
                  </button>
                </div>
                <div className="prepend">
                  <span className="mif-envelop"></span>
                </div>
              </div>
              <div className="input">
                <input
                  data-role="input"
                  data-prepend="<span className='mif-user'>"
                  data-role-input="true"
                  type="text"
                  className=""
                />
                <div className="button-group">
                  <button className="button input-clear-button" type="button">
                    <span className="default-icon-cross"></span>
                  </button>
                </div>
                <div className="prepend">
                  <span className="mif-user"></span>
                </div>
              </div>
              <span className="title">Input</span>
            </div>
            <div className="group" style={{ width: '220px' }}>
              <div className="textarea flex-self-stretch autosize no-scroll-vertical">
                <textarea
                  data-role="textarea"
                  className=""
                  data-role-textarea="true"
                  style={{ height: '0px' }}
                ></textarea>
                <textarea
                  className="fake-textarea"
                  style={{ height: '0px' }}
                ></textarea>
                <button className="button input-clear-button" type="button">
                  <span className="default-icon-cross"></span>
                </button>
              </div>
              <span className="title">Textarea</span>
            </div>
            <div className="group flex-column" style={{ width: '220px' }}>
              <label
                className="select input-normal"
                id="select-1686572114903355"
                for="select-focus-trigger-168657211490383"
              >
                <span className="dropdown-toggle"></span>
                <select data-role="select" data-role-select="true">
                  <option value="1">Value 1</option>
                  <option value="2">Value 2</option>
                  <option value="3">Value 3</option>
                </select>
                <div className="button-group d-none"></div>
                <input
                  type="checkbox"
                  className="select-focus-trigger"
                  id="select-focus-trigger-168657211490383"
                />
                <div
                  className="select-input"
                  name="__select-1686572114903355__"
                >
                  Value 1
                </div>
                <div
                  className="drop-container"
                  data-role-dropdown="true"
                  data-role="dropdown"
                  style={{ display: 'none' }}
                >
                  <div>
                    <div className="input">
                      <input
                        type="text"
                        data-role="input"
                        placeholder="Search..."
                        data-role-input="true"
                        className=""
                      />
                      <div className="button-group">
                        <button
                          className="button input-clear-button"
                          type="button"
                        >
                          <span className="default-icon-cross"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <ul className="option-list" style={{ maxHeight: '200px' }}>
                    <li data-text="Value 1" data-value="1" className="active">
                      <a>Value 1</a>
                    </li>
                    <li data-text="Value 2" data-value="2">
                      <a>Value 2</a>
                    </li>
                    <li data-text="Value 3" data-value="3">
                      <a>Value 3</a>
                    </li>
                  </ul>
                </div>
              </label>
              <span className="title">Select</span>
            </div>
            <div className="group flex-column" style={{ width: '220px' }}>
              <div>
                <label className="checkbox transition-on">
                  <input
                    name="c1"
                    type="checkbox"
                    data-role="checkbox"
                    data-caption="check it"
                    data-role-checkbox="true"
                    className=""
                  />
                  <span className="check"></span>
                  <span className="caption">check it</span>
                </label>
              </div>
              <div>
                <label className="radio transition-on">
                  <input
                    name="r1"
                    type="radio"
                    data-role="radio"
                    data-caption="A"
                    data-role-radio="true"
                    className=""
                  />
                  <span className="check"></span>
                  <span className="caption">A</span>
                </label>
                <label className="radio transition-on">
                  <input
                    name="r1"
                    type="radio"
                    data-role="radio"
                    data-caption="B"
                    data-role-radio="true"
                    className=""
                  />
                  <span className="check"></span>
                  <span className="caption">B</span>
                </label>
                <label className="radio transition-on">
                  <input
                    name="r1"
                    type="radio"
                    data-role="radio"
                    data-caption="C"
                    data-role-radio="true"
                    className=""
                  />
                  <span className="check"></span>
                  <span className="caption">C</span>
                </label>
              </div>
              <div>
                <label className="switch transition-on">
                  <input
                    name="c2"
                    type="checkbox"
                    data-role="switch"
                    data-caption="check it"
                    data-role-switch="true"
                    className=""
                  />
                  <span className="check"></span>
                  <span className="caption">check it</span>
                </label>
              </div>
              <span className="title">Switches</span>
            </div>
          </div>
        </div>
      </nav>
      <div className="window-content p-2">
        <h1 className="text-center">Metro UI</h1>
        <h3 className="text-center">The Components Library</h3>
        <div data-role="cube"></div>
      </div>
    </div>
  );
}

export default Window;
