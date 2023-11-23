import React from 'react'
import './Reels.css';
import Sidenavbar from '../Sidenavbar';
import { Avatar } from '@mui/material';
import { AiOutlineHeart } from 'react-icons/ai';
import ReactPlayer from 'react-player';
import { FiMessageCircle } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';
import { BsBookmark} from 'react-icons/bs';

const Reels = () => {
  return (
    <div className="app">
     
        <div className="row">
        <div className="col-lg-2 ">
          <div className='home-navigation'>
            <Sidenavbar/>
          </div>
        </div>
            <div className="col m-10 d-flex flex-column"  >
              <div>
            <div className='reel d-flex flex-row'>
              <div className='reelsSectionOne rounded d-flex flex-column'>
                <ReactPlayer
                  className='reelVideoPlayer '
                  width='300px'
                  height='550px'
                  loop={true}
                  url='https://video.fmaa11-1.fna.fbcdn.net/v/t39.25447-2/380286348_2289956948059006_6263852207093248844_n.mp4?_nc_cat=103&vs=1a86a7a4e9b40cc9&_nc_vs=HBkcFQAYJEdJeTFxaFpfbzNBbXRDSUlBRXp6VmlGbHJPMVdibWRqQUFBRhUAAsgBAEsHiBJwcm9ncmVzc2l2ZV9yZWNpcGUBMQ1zdWJzYW1wbGVfZnBzABB2bWFmX2VuYWJsZV9uc3ViACBtZWFzdXJlX29yaWdpbmFsX3Jlc29sdXRpb25fc3NpbQAoY29tcHV0ZV9zc2ltX29ubHlfYXRfb3JpZ2luYWxfcmVzb2x1dGlvbgAddXNlX2xhbmN6b3NfZm9yX3ZxbV91cHNjYWxpbmcAEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcjBdAAAAAAAAAABERAAAAJpDSreqNk5QBFQIoAkMzGAt2dHNfcHJldmlldxwXQB8ZmZmZmZoYKWRhc2hfaTRsaXRlYmFzaWNfNXNlY2dvcF9ocTJfZnJhZ18yX3ZpZGVvEgAYGHZpZGVvcy52dHMuY2FsbGJhY2sucHJvZDgSVklERU9fVklFV19SRVFVRVNUGwqIFW9lbV90YXJnZXRfZW5jb2RlX3RhZwZvZXBfaGQTb2VtX3JlcXVlc3RfdGltZV9tcwEwDG9lbV9jZmdfcnVsZQd1bm11dGVkE29lbV9yb2lfcmVhY2hfY291bnQFMTE3NDMRb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZA8zMjU3ODM3MjIzNTYyNzQSb2VtX3ZpZGVvX2Fzc2V0X2lkDzMyNTc4MzcxOTAyMjk0MRVvZW1fdmlkZW9fcmVzb3VyY2VfaWQPMzI1NzgzNzE1Njg5NjA4HG9lbV9zb3VyY2VfdmlkZW9fZW5jb2RpbmdfaWQPMzEwNDI0NDM4MzQyOTI2DnZ0c19yZXF1ZXN0X2lkACUCHAAlxAEbB4gBcwQ3NDU5AmNkCjIwMjEtMDUtMTcDcmNiBTExNzAwA2FwcAVWaWRlbwJjdAhVTkxJU1RFRBNvcmlnaW5hbF9kdXJhdGlvbl9zBjcuODA3OAJ0cxVwcm9ncmVzc2l2ZV9lbmNvZGluZ3MA&ccb=1-7&_nc_sid=f56457&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=exsTYMraTr0AX-A_Yuq&_nc_ht=video.fmaa11-1.fna&oh=00_AfCfWiCXTAmKZOVI77PKK9FjnsNdQu0Rjp5BrYRVgN_icQ&oe=65639483&_nc_rid=229356501607861&_nc_store_type=0'
                  playing={true}
                  volume={0}
                />
                
           
          </div>
          <div className='reelsSectionTwo p-2'>
            <div className='reelsSectionTwoLike'>
              
                <AiOutlineHeart size={27} style={{ padding: '2px', color:"black" }} />
             
              <p>22k</p>
            </div>
            <div className='reelsSectionTwoComments'>
              <FiMessageCircle size={27}  style={{ padding: '2px',color:"black" }} />
              <p>comments</p>
            </div>
            <div className='reelsSectionTwoForward'>
              <FaTelegramPlane size={27}  style={{ padding: '2px',color:"black" }} />
            </div>
            <div className='reelsSectionTwoBookmark'>
              
               
                <BsBookmark  size={27}  style={{ padding: '2px',color:"black" }} />
            
            </div>
            <div className='reelsSectionTwoMore'>
              <FiMoreHorizontal size={27} style={{ padding: '2px',color:"black" }} />
            </div>
            <div className='reelsSectionTwoAudioOwner'>
              <Avatar/>
            </div>
          </div>
        </div>
        </div>
        <div>
            <div className='reel d-flex flex-row'>
              <div className='reelsSectionOne rounded d-flex flex-column'>
                <ReactPlayer
                  className='reelVideoPlayer '
                  width='300px'
                  height='550px'
                  loop={true}
                  url='https://d.rapidcdn.app/snapinsta?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LXdhdzEtMS5jZG5pbnN0YWdyYW0uY29tL3YvdDY2LjMwMTAwLTE2LzEwMDAwMDAwXzg3NTE1NzMwMzY4NDk0NV8zNzY1OTQ1NzgxMDExNzYzODBfbi5tcDQ_X25jX2h0PXNjb250ZW50LXdhdzEtMS5jZG5pbnN0YWdyYW0uY29tJl9uY19jYXQ9MTA5Jl9uY19vaGM9dWo4R0lkdnBaT3NBWF92bG5RdCZlZG09QVBfVjEwRUJBQUFBJmNjYj03LTUmb2g9MDBfQWZBVXhkZlJtRDlXT21fTXVjQ2FEQzMtQXlJbGo0SWw1LTZwSnYxUFRqSXhqdyZvZT02NTYwNzk1MCZfbmNfc2lkPTI5OTliOCZkbD0xIiwiZmlsZW5hbWUiOiJTbmFwaW5zdGEuYXBwX3ZpZGVvXzEwMDAwMDAwXzg3NTE1NzMwMzY4NDk0NV8zNzY1OTQ1NzgxMDExNzYzODBfbi5tcDQifQ.Yn1j1Nl22gkDfylgRj6I87NE3QfY4W3WFGG3C9vg7Kw&dl=1&dl=1'
                  playing={true}
                  volume={0}
                />
                
           
          </div>
          <div className='reelsSectionTwo p-2'>
            <div className='reelsSectionTwoLike'>
              
                <AiOutlineHeart size={27} style={{ padding: '2px', color:"black" }} />
             
              <p>22k</p>
            </div>
            <div className='reelsSectionTwoComments'>
              <FiMessageCircle size={27}  style={{ padding: '2px',color:"black" }} />
              <p>comments</p>
            </div>
            <div className='reelsSectionTwoForward'>
              <FaTelegramPlane size={27}  style={{ padding: '2px',color:"black" }} />
            </div>
            <div className='reelsSectionTwoBookmark'>
              
               
                <BsBookmark  size={27}  style={{ padding: '2px',color:"black" }} />
            
            </div>
            <div className='reelsSectionTwoMore'>
              <FiMoreHorizontal size={27} style={{ padding: '2px',color:"black" }} />
            </div>
            <div className='reelsSectionTwoAudioOwner'>
              <Avatar/>
            </div>
          </div>
        </div>
        </div>
        <div>
            <div className='reel d-flex flex-row'>
              <div className='reelsSectionOne rounded d-flex flex-column'>
                <ReactPlayer
                  className='reelVideoPlayer '
                  width='300px'
                  height='550px'
                  loop={true}
                  url='https://d.rapidcdn.app/snapinsta?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90NjYuMzAxMDAtMTYvNDI5MTA1ODdfMzM2MjQyOTQ1Njk4OTg4XzgwNjkyOTI5NjQ1NzY4NzgwOTdfbi5tcDQ_X25jX2h0PXNjb250ZW50LmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDgmX25jX29oYz1WTEExa2JXeWpLSUFYLUxTSC16JmVkbT1BUHMxN0NVQkFBQUEmY2NiPTctNSZvaD0wMF9BZkF4dGlEZWRpYTNPZzZ1X1ZHRkc5MTZvTk14YzBRUllHLUJUSVRIMGY1czFnJm9lPTY1NjA2M0U2Jl9uY19zaWQ9MTBkMTNiIiwiZmlsZW5hbWUiOiJTbmFwaW5zdGEuYXBwX3ZpZGVvXzQyOTEwNTg3XzMzNjI0Mjk0NTY5ODk4OF84MDY5MjkyOTY0NTc2ODc4MDk3X24ubXA0In0.TMwJXtv2HZLhkgAS_W16IUPZWM8H9GKPfx3cR_TP2zM&dl=1&dl=1'
                  playing={true}
                  volume={0}
                />
                
           
          </div>
          <div className='reelsSectionTwo p-2'>
            <div className='reelsSectionTwoLike'>
              
                <AiOutlineHeart size={27} style={{ padding: '2px', color:"black" }} />
             
              <p>22k</p>
            </div>
            <div className='reelsSectionTwoComments'>
              <FiMessageCircle size={27}  style={{ padding: '2px',color:"black" }} />
              <p>comments</p>
            </div>
            <div className='reelsSectionTwoForward'>
              <FaTelegramPlane size={27}  style={{ padding: '2px',color:"black" }} />
            </div>
            <div className='reelsSectionTwoBookmark'>
              
               
                <BsBookmark  size={27}  style={{ padding: '2px',color:"black" }} />
            
            </div>
            <div className='reelsSectionTwoMore'>
              <FiMoreHorizontal size={27} style={{ padding: '2px',color:"black" }} />
            </div>
            <div className='reelsSectionTwoAudioOwner'>
              <Avatar/>
            </div>
          </div>
        </div>
        </div>
        <div>
            <div className='reel d-flex flex-row'>
              <div className='reelsSectionOne rounded d-flex flex-column'>
                <ReactPlayer
                  className='reelVideoPlayer '
                  width='300px'
                  height='550px'
                  loop={true}
                  url='https://d.rapidcdn.app/snapinsta?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90NjYuMzAxMDAtMTYvMzIzODY5NDczXzEwMTMyODYyNzYzOTUyOTJfNTQ5MDA1MDk2NDI2MzAxMjM2Nl9uLm1wND9fbmNfaHQ9c2NvbnRlbnQuY2RuaW5zdGFncmFtLmNvbSZfbmNfY2F0PTEwMCZfbmNfb2hjPXZEdEFyZ3ZiUU1nQVg5aWlkNWomZWRtPUFQczE3Q1VCQUFBQSZjY2I9Ny01Jm9oPTAwX0FmQzg4VWJkeDgxWm1RbVVucUZYcEpuelVrTzhBU0hJUDdYR051MVZYWlR5NXcmb2U9NjU2MDc5MzYmX25jX3NpZD0xMGQxM2IiLCJmaWxlbmFtZSI6IlNuYXBpbnN0YS5hcHBfdmlkZW9fMzIzODY5NDczXzEwMTMyODYyNzYzOTUyOTJfNTQ5MDA1MDk2NDI2MzAxMjM2Nl9uLm1wNCJ9.eVEjeFRo-kJRlFIUfj8QPT-mIfmT61NFzMXV7Aa6nIU&dl=1&dl=1'
                  playing={true}
                  volume={0}
                />
                
           
          </div>
          <div className='reelsSectionTwo p-2'>
            <div className='reelsSectionTwoLike'>
              
                <AiOutlineHeart size={27} style={{ padding: '2px', color:"black" }} />
             
              <p>22k</p>
            </div>
            <div className='reelsSectionTwoComments'>
              <FiMessageCircle size={27}  style={{ padding: '2px',color:"black" }} />
              <p>comments</p>
            </div>
            <div className='reelsSectionTwoForward'>
              <FaTelegramPlane size={27}  style={{ padding: '2px',color:"black" }} />
            </div>
            <div className='reelsSectionTwoBookmark'> 
                <BsBookmark  size={27}  style={{ padding: '2px',color:"black" }} />
            
            </div>
            <div className='reelsSectionTwoMore'>
              <FiMoreHorizontal size={27} style={{ padding: '2px',color:"black" }} />
            </div>
            <div className='reelsSectionTwoAudioOwner'>
              <Avatar/>
            </div>
          </div>
        </div>
        </div>  
        </div>
        </div>
    </div>
  )
}

export default Reels