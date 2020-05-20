import React from 'react';
import {Link} from 'react-router-dom';


function Works(props) {
  let {data, loading, loadEnd} = props.works;
  return (
    <div className="works">
      <h3>学员作品</h3>
      <ul className="works_list clearfix">
        {
          data.map((item, index) => {
            return (
              <li key={item.id}>
                <Link to={'/work/' + item.id}>
                  <img src={item.icon} className="work_a" />
                  {/* 添加className是为了阻止better-scroll的默认行为 */}
                  <span className="wrork_txt clearfix work_a">
                    <strong className="work_a">{item.title}</strong>
                    <span className="work_a">
                      <em className="work_a">{item.message}</em>
                      <em className="work_a">{item.good}</em>
                    </span>
                  </span>
                </Link>
              </li>
            )
          })
        }

      </ul>
      <a className="more" href="#">{loadEnd? "没有新的数据了": (loading? "正在加载中...": "上拉加载更多")}</a>
    </div>
  )
}


export default Works;


