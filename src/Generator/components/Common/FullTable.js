import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class FullTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      materials: [],
      costs: [],
      basicinfo: {},
     };
  }
  componentDidMount() {
    const { materials, costs } = this.props;
    console.log('materials000', materials);
    if(materials != undefined){
      this.setState({
        materials,
        costs,
      });
    }
  }

  componentWillReceiveProps(newProps) {
    const { materials, costs, basicinfo } = newProps;
    console.log('costs', costs);
    this.setState({
      materials,
      costs,
      basicinfo,
    });
  }

  render() {
    const { materials, costs, basicinfo } = this.state;
    const materialName = [];
    const materialWeight = [];
    let materialWeightSum = 0;
    const materialWastage = [];
    let materialWastageSum = 0;
    const materialNewValue = [];
    let materialValueSum = 0;

    const costName = [];
    const costValue = [];
    let costValueSum = 0;

    // eslint-disable-next-line no-restricted-syntax
    for (const item of materials) {
      materialWeightSum += parseFloat(item.newWeight, 10);
      materialWastageSum += parseFloat(item.wastage, 10);
      materialValueSum += parseFloat(item.newValue, 10);

      materialName.push(
        <ul className="form-check">
          <li>{item.name}</li>
        </ul>,
      );
      materialWeight.push(
        <ul className="form-check">
          <li>{item.newWeight}</li>
        </ul>,
      );
      materialWastage.push(
        <ul className="form-check">
          <li>{item.wastage}</li>
        </ul>,
      );
      materialNewValue.push(
        <ul className="form-check">
          <li>{item.newValue}</li>
        </ul>,
      );
    }
    

    // eslint-disable-next-line no-restricted-syntax
    for (const item of costs) {
      costValueSum += parseFloat(item.newValue, 10);

      costName.push(
        <ul className="form-check">
          <li>{item.name}</li>
        </ul>,
      );
      costValue.push(
        <ul className="form-check">
          <li>{item.newValue}</li>
        </ul>,
      );
    }

    const raisedValueSum = materialValueSum + costValueSum;
    const wholesaleValueSum = raisedValueSum + ((raisedValueSum / 100) * 15);

    return (
      <div>
        <div className="row">
          <div className="col-4 col-sm-4">
            <p>১। নিবন্ধিত ব্যক্তির নাম:  ঢাকা সিরামিকস্ এন্ড স্যানিটারী ওয়্যারস্ লি:</p>
            <p>২। ঠিকানা  : এ ৬৫-৬৮ এন্ড ৭৫-৭৮,বিসিক,টঙ্গী,গাজীপুর।</p>
            <p>৩। নিবন্ধিত সংখ্যা : ০০১৮৩৭৯৫</p>
            <p>৪। এলাকা কোড  :১৮০১০৩</p>
          </div>
          <div className="col-4 col-sm-4 text-center">
            <p>গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</p>
            <p>জাতীয় রাজস্ব বোর্ড, ঢাকা।</p>
            <p>উপকরণ/উৎপাদন সম্পর্ক বা সহগ ও মূল্যভিক্তিক ঘোষনাপত্র</p>
            <p>(বিধি ৩ (১) দ্রষ্টব্য)</p>
          </div>
          <div className="col-3 col-sm-3">
            <p>৫। মূল্য ঘোষনা নম্বর  : ০১/২০১৮</p>
            <p>৬। টেলিফোন নম্বর :৯৮১২৩৯৮</p>
            <p>৭। ফ্যাক্র নম্বর: ৯৮১০৪৯৭</p>
          </div>
          <div className="col-1 col-sm-1">
            <p>মূসক-১</p>
          </div>
        </div>

        <br />
        
        <table className="table table-bordered">
          <thead>
            <tr>
              <td>ক্রমিক সংখ্যা</td>
              <td>পণ্যের  সামজ্ঞ্যস্যপূর্ণ নামকরণ (H.S Code)</td>
              <td>Last</td>
              <td>Handle</td>
              <td>পণ্যের  নাম ও বিবরণ</td>
              <td colspan="2">সরবরাহ / বিক্রয়ের একক</td>
              <td>ভতণ্ঠ ঊাভ¡প্লব যণ্ঠযয়¡শÑ  ঊভখষত/খু¡ছ¡ল¡স ঔ ভণ্ঠ¡¢খি ঢ়¡লঘত্ত£ষ ব¡ল ঔ ¢যযষত</td>
              <td>ঐখখ ভতণ্ঠ ঊাভ¡প্লব যণ্ঠযয়¡শÑ অভছঁঢ়য় ঊভখষব/খু¡ছ¡ল¡স ঔ ভণ্ঠ¡¢খি ঢ়¡লঘত্ত£ষ ভ¢ষল¡ত (অভছ­ঁষ ভ¢ষল¡ত ভত্তনল যভ্রব£ষ ল্লফণ্ঠ ইস¡প¡ র¡­য ঊ­ষ্ফগ খ¢ষ­ধ য়ঈ­য ু)</td>
              <td>খস¡ল (৬) ঐ য¢তÑধ ঊভখষত য¡ ভণ্ঠ¡¢খি ঢ়¡লঘত্ত£ষ ল§সণ্ঠ ইলপ¡ব£খ্রধ য়­স স্খষ্ট¡ঁব্লশ¡ঘণ্ঠ ল§সণ্ঠ+স্খষ্ট+ঢ়ড্ডভ§ষখ স্খষ্ট+ঐস¢ঢ় ¢ম+ অযখ¡ড¡­ল¡ ঊুঁব ঢ়¡ষছ¡ঝÑ/দ্বয়¡ব£ঁ ঊাভ¡¢পধ য়ঈ­স ঢ়ড্ডভ§ষখ স্খষ্টঢ়য় ®ল¡ঠ ঐক্ষ্মঁল§সণ্ঠ (ভত্তপš ল§ঢ়খ যণ্ঠধ£ধ)/অ¡যঘ¡ষ£ ভতণ্ঠ য়ঈ­স ইযঘ¡ষ£ স্খষ্টঢ়য় ®ল¡ঠ ল§সণ্ঠ/ল§ঢ়খ অযণ্ঠ¡য়¢ধ ভত্ত্বম্ফ য়ঈ­স ®ল¡ঠ ঐক্ষ্মঁল§সণ্ঠ </td>
              <td>ল§সণ্ঠ ঢ়­িশ¡ঝ­বষ গ¡ধ/ইঈ­ঠ­লষ ব¡ল </td>
              <td>ভত্ত¢ধ ঐখখ ভতণ্ঠ ল§সণ্ঠ খস¡ল (৮) ঐ ঊ¢ষ্ফ¢গধ ভত্ত¢ধ¢ঠ ইঈ­ঠল য¡ গ¡­ধষ অযপ¡ব /ল§সণ্ঠ ঢ়­িশ¡ঝ­বষ ভ¢ষল¡ব </td>
              <td>ঢ়ড্ডভ§ষখ স্খষ্ট ই­ষ¡ভ­শ¡ঘণ্ঠ ল§সণ্ঠ (শ¢প ¢য­যছণ্ঠ ভ­তণ্ঠষ ঊাভ¡পব ভশÑ¡­ঁ ঢ়ড্ডভ§ষখ স্খষ্ট ভত্ত­শ¡ঝণ্ঠ ন¡­খ) (খস¡ল (৭) ঔ (৯) ঐষ ®শ¡ঘমস) 	</td>
              <td>খস¡ল (১১) ঐ ভত্তদ্ম¹¡¢যধ ল§­সণ্ঠষ ঊভষ ঢ়ড্ডভ§ষখ স্খ­ষ্টষ ভ¢ষল¡ব</td>
              <td>ল§ঢ়খ ই­ষ¡ভ­শ¡ঘণ্ঠ ল§সণ্ঠ (খস¡ম (১১) + খস¡ম (১২) (¢যীব্জী ®শ্লৎ­œ দ্বয়¡ব£ঁ ভশÑ¡­ঁ ঢ়ড্ডভ§ষখ স্খষ্ট ভত্ত­শ¡ঝণ্ঠ বঁ ®ঢ়­ৎ­œ খসল (৭) + (৯)	</td>
              <td colspan="2">স্খষ্ট ঔ খষঢ়য় ¢যঐক্ষ্মঁল§সণ্ঠ	</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Kg (Approx)</td>
              <td>Wastage (Approx)</td>
              <td></td>
              <td></td>
              <td></td>
              <td>যধÑল¡ব </td>
              <td>ভত্তদ্ম¹¡¢যধ </td>
              <td></td>
              <td>যধÑল¡ব </td>
              <td>ভত্তদ্ম¹¡¢যধ</td>
              <td>ভ¡ঈখ¡ষ£</td>
              <td>লম্ভব্জধ গ¤ছষ¡ ল§সণ্ঠ (শ¢প ন¡­খ)</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td></td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>12</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
            </tr>
            <tr>
              <td>1</td>
              <td></td>
              <td></td>
              <td>@</td>
              <td>{materialName}</td>
              <td>{materialWeight}</td>
              <td>{materialWastage}</td>
              <td>{materialNewValue}</td>
              <td>{costName}</td>
              <td>{costValue}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Total</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>{materialWeightSum}</td>
              <td>{materialWastageSum}</td>
              <td>{materialValueSum}</td>
              <td></td>
              <td>{costValueSum}</td>
              <td>{basicinfo.presentValue}</td>
              <td>{raisedValueSum}</td>
              <td></td>
              <td>{basicinfo.presentValue}</td>
              <td>{raisedValueSum}</td>
              <td>{wholesaleValueSum}</td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <br />
        <br />
        <br />

        <div className="row">
          <div className="col-sm-12">
            <p>১।	কলাম (৬),(৭) ও (৮) এ তথ্যের  সমর্থনে মূল্য  সংযোজন কর বিধিমালা, ১৯৯১ এর বিধি ১৬,১৭ ও ১৮ মোতাবেক বা প্রযোজ্য অন্যান্য প্রামাণিক দলিলাদি এই ঘোষনাপত্রের সহিত সংযুুক্ত করা হইয়াছে।	</p>
            <p>২।	আমি এই মর্মে অঙ্গীকার করিতেছি যে, কর ধার্যের জন্য উপযুক্ত মূল্যভিত্তি সম্পর্কিত সকল তথ্য সত্য ও সঠিক এবং ইহা নির্ধারণের অনুকুলে সকল দলিলাদি আমার এখতিয়ার আছে।	</p>
            <p>
              ৩।	ঊ¢ষ্ফ¢গধ ¢য¢ফল¡স¡ষ ¢য¢ফ ৩ ঐ য¢তÑধ ভ¢ষ¢দ্বয়¢ধষ ই­স¡­খ ল§সণ্ঠ ঢ়­িশ¡ঝব খষ খধ্রÑভৎ খধ্রÑখ ভ¢ষছ¡¢সধ ­খ¡ব ধপ্ল¿¹ ঝ¢ষ­ভ ঊভ¢ষ-ঊঔক্ষ্ম ®ঙ¡¢ড়ধ ল§সণ্ঠ¢র¢ঔ অঢ়ঘি¢ধভ§তÑ য¡ খল ভত্তধ£ঁল¡ব য়ঔঁ¡ষ ®ৎ­œ ঊঔক্ষ্ম খধ্রÑভৎ 						
                  কর্তৃক নির্ধারিত মূল্য ¢র¢ঔ অব¤শ¡ঁ£ ®ঙ¡ড়ব¡ ভত্তপ¡­বষ ধ¡¢ষগ য়ঈ­ধ ভত্ত­পঁ খষ ভত্তপ¡­ব ই¢ল য¡ফণ্ঠ ন¡¢খয ু						
                  [¢যীব্জী যণ্ঠযঢ়¡ঁ£ষ ®ৎ­œ ঐক্ষ্ম£ধ ভ­তণ্ঠষ ব¡ল খস¡ল (৫) ঐষ ঐযি ভ­তণ্ঠষ ঐক্ষ্মঁল§সণ্ঠ খস¡ল (৭) ঐ ®পগ¡ঈ­ধ য়ঈ­য ু]	
            </p>
          </div>
        </div>

        <br />
        <br />
        <br />
        

        <div className="row">
          <div className="col-9 col-sm-9">
            <p>তারিখ : ০১.০৩.২০১৮	</p>
          </div>
          <div className="col-3 col-sm-3">
            <p>নিবন্ধিত ব্যক্তি/ব্যবস্থাপনা কর্তৃপক্ষের স¦াক্ষর ও সিল	</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    materials: state.generator.data,
    costs: state.generator.costData,
    basicinfo: state.generator.basicinfo,
  };
};

export default connect(mapStateToProps)(FullTable);
