import './style.css'

const Form = () => {
  return (
    <main className='p-5 bg-white'>
      <div className='mt-2'>
        <span className='text-[13px]'>收货人姓名</span>
        <input className='block rounded-md w-[100%] p-2 border-[#E5E5E5] border outline-none' type="text" placeholder='收货人姓名' />
      </div>

      <div className='mt-2'>
        <span className='text-[13px]'>手机号码</span>
        <input className='block rounded-md w-[100%] p-2 border-[#E5E5E5] border outline-none' type="text" placeholder='手机号码' />
      </div>

      <div className='mt-2'>
        <span className='text-[13px]'>手机验证码</span>
        <div className='flex'>
          <input className='block rounded-md w-[100%] p-2 border-[#E5E5E5] border outline-none' type="text" placeholder='手机验证码' />
          <div className='bg-[#F03D3C] py-3 px-2 flex justify-center items-center text-white ml-1 whitespace-nowrap text-sm'>
            获取验证码
          </div>
        </div>
      </div>

      <div className='mt-2'>
        <span className='text-[13px]'>选择地区</span>
        <select className='block rounded-md w-[100%] p-2 border-[#E5E5E5] border outline-none'>
          <option value="">省份</option>
        </select>
        <select className='block rounded-md w-[100%] p-2 mt-1 border-[#E5E5E5] border outline-none'>
          <option value="">城市</option>
        </select>
      </div>

      <div className='mt-2'>
        <span className='text-[13px]'>详细地址</span>
        <input className='block rounded-md w-[100%] p-2 border-[#E5E5E5] border outline-none' type="text" placeholder='例如xx街道xx号' />
      </div>

      <div className='flex justify-center items-center bg-[#F03D3C] text-lg py-3 text-white mt-3'>
        提交订单
      </div>
    </main>
  )
}

export default Form